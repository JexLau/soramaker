import { promises as fs } from "fs";
import path from "path";
import he from 'he';

const hackerNewsIds = ["39417334"]
const DATA_DIR_PATH = path.join(process.cwd(), './src/constants/news');

// sleep 降低请求频率
function sleep() {
  const milliseconds = Math.random() * (3000 - 1000) + 1000;
  return new Promise(resolve => setTimeout(resolve, milliseconds));
}

// 限制并发请求
async function queuePromises(promises, limit) {
  let results = [];
  let executing = [];

  for (const promise of promises) {
    const p = Promise.resolve().then(() => promise());
    results.push(p);

    // 如果达到了并发限制，等待至少一个promise完成
    if (limit <= promises.length) {
      const e = p.then(() => executing.splice(executing.indexOf(e), 1));
      executing.push(e);
      if (executing.length >= limit) {
        await Promise.race(executing);
      }
    }
  }

  return Promise.all(results);
}


const getNews = async (id) => {
  try {
    console.log(`请求- ${id} 消息`);
    const response = await fetch(`https://hacker-news.firebaseio.com/v0/item/${id}.json?print=pretty`);
    const data = await response.json();
    return {
      ...data,
      title: data.title ? he.decode(data.title) : undefined,
      text: data.text ? he.decode(data.text) : undefined,
      time: new Date(data.time * 1000).toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
        minute: "numeric",
        hour: "numeric",
      }),
    };
  } catch (error) {
    console.log(`请求- ${id} 第三方接口失败`, error);
    return [];
  }
}

const getComments = async (commentId) => {
  try {
    console.log(`请求- ${commentId} 评论`);
    const response = await fetch(`https://hacker-news.firebaseio.com/v0/item/${commentId}.json?print=pretty`);
    const data = await response.json();

    if(data?.kids && data.kids.length > 0) {
      const commentIds = data.kids || [];
      const commentsPromises = commentIds.map((id) => () => getComments(id));
      const commentsData = await queuePromises(commentsPromises, 6);
      data.comments = commentsData;
    }

    const result = {
      ...data,
      title: data.title ? he.decode(data.title) : undefined,
      text: data.text ? he.decode(data.text) : undefined,
      time: new Date(data.time * 1000).toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
        minute: "numeric",
        hour: "numeric",
      }),
    };
    return result;
  } catch (error) {
    console.log(`请求- ${commentId} 第三方接口失败`, error);
    return [];
  }
}

async function downloadData(id) {
  const data = await getNews(id);
  const source = `https://news.ycombinator.com/item?id=${id}`;

  const commentIds = data.kids || [];
  const commentsPromises = commentIds.map((id) => () => getComments(id));
  const commentsData = await queuePromises(commentsPromises, 6);

  // const commentsData = await Promise.all(commentsPromises);

  const result = {
    id,
    source,
    ...data,
    comments: commentsData
  };

  const filePath = path.join(DATA_DIR_PATH, `${id}.json`);
  await fs.writeFile(filePath, JSON.stringify(result, null, 2), 'utf8');
}

for (let id of hackerNewsIds) {
  await downloadData(id);
  await sleep();
}