import fs from "fs";
import path from "path";

const folder = path.join(process.cwd(), 'src/constants/news');
export const getNewsData = () => {
  const files = fs.readdirSync(folder);
  const posts = files.map((fileName) => {
    const filePath = path.join(folder, fileName);
    const fileContents = fs.readFileSync(filePath, "utf8");
    return JSON.parse(fileContents);
  });

  return posts;
};

export const getNewsIds = () => {
  const files = fs.readdirSync(folder);
  return files;
};

export const getNewsDataDetail = (id: string) => {
  const fullPath = path.join(folder, `${id}.json`);
  const fileContents = fs.readFileSync(fullPath, "utf8");
  return JSON.parse(fileContents);
}

