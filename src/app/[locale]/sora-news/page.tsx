import { Meta } from '@/components/Meta';
import { MainContent } from '@/components/Main';
import { NewsList } from '@/components/NewsList';
import { getNewsData } from './getNewsData';


const CommentsPage = async ({ params }: { params: Record<string, string> }) => {
  const { locale = 'en' } = params;
  const posts = getNewsData();

  return (
    <>
      <Meta title={"Sora AI News: Latest Updates & Breakthroughs in AI Technology"} description={"Discover the latest Sora AI news, including breakthroughs, updates, and insights in AI technology. Stay informed about the future of AI with Sora."} keywords={'Sora AI News, AI Technology Updates, AI Breakthroughs, AI Insights, Future of AI'} locale={locale} pageurl='/sora-news' />
      <MainContent>
        <div className="mx-auto max-w-2xl text-center my-4">
          <h1 className="mt-2 text-3xl font-bold tracking-tight text-main-text sm:text-4xl text-center">
            Latest Sora AI News & Insights
          </h1>
          <p className="mt-4 text-main-text text-center">
            Discover daily updates on the latest Sora AI News & Insights at Soramaker.ai. Dive into the world of AI innovation with fresh, engaging content every day. Stay ahead in the AI landscape with our expert analysis and in-depth articles.
          </p>
        </div>
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center my-4">
            <h2 className="text-3xl font-bold tracking-tight text-main-text sm:text-4xl">Hacker News</h2>
          </div>
          <div className="mb-8">
            <NewsList list={posts} />
          </div>
        </div>
      </MainContent>
    </>

  );
};


export default CommentsPage;
