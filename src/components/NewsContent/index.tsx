import { getNewsData } from "@/app/[locale]/sora-news/getNewsData";
import { NewsList } from "../NewsList";

export const NewsContent = ({ list }: { list: any[]}) => {
  return (<>
    <div className="mx-auto max-w-7xl px-6 lg:px-8">
      <div className="mx-auto max-w-2xl text-center my-4">
        <h2 className="text-3xl font-bold tracking-tight text-main-text sm:text-4xl">Hacker News</h2>
      </div>
      <div className="mb-8">
        <NewsList list={list} />
      </div>
    </div>
  </>);
}