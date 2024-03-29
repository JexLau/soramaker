import { MainContent } from "@/components/Main";
import { Meta } from "@/components/Meta";
import { getNewsDataDetail, getNewsIds } from "../getNewsData";
import { CommentItem } from "@/components/Comment";

export function generateStaticParams() {
  const ids = getNewsIds().map((item) => {
    return {
      id: item.replace(/\.json$/, '')
    }
  });
  return ids;
}

export default function DefaultPage({ params }: { params: Record<string, string> }) {
  const { locale = 'en', id } = params;
  // 首字母大写
  const detail = getNewsDataDetail(id);

  const renderComment = (comments: any[]) => {
    return comments.map((item: any, idx: number) => {
      return !item.delete ? <CommentItem
      key={idx}
      username={item.by}
      timestamp={item.time}
      text={item.text}
    >
        {item.comments && renderComment(item.comments)}
      </CommentItem> : null
    })
  }

  const renderStory = (comments: any[]) => {
    return comments.map((item: any) => {
      return !item.delete ? <CommentItem
        key={item.id}
        username={item.by}
        timestamp={item.time}
        text={item.text}
        title={item.title}
      >
        {item.comments && renderStory(item.comments)}
      </CommentItem> : null
    })
  }

  return (<>
    <Meta
      title={`${detail.title || detail.text} | Sora Maker AI`} description={`Discover the latest groundbreaking update from Sora on Sora Maker AI. Stay ahead with the latest Sora AI news and developments.`} keywords={'Sora AI, AI news, AI updates, SoraNews analysis, AI technology insights, latest AI developments'}
      locale={locale}
      pageurl={`/sora-news/${id}`}
    />
    <MainContent className="!pt-0">
      <div className="mx-auto max-w-2xl text-center my-4">
        <h1 className="text-xl font-bold tracking-tight text-main-text">{detail.title}</h1>
      </div>
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="bg py-4">
          {detail.type === 'story' ? renderStory(detail.comments) : renderComment(detail.comments)}
        </div>
      </div>
    </MainContent>
  </>
  );
}
