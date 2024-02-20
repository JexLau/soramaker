import { Meta } from '@/components/Meta';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { CommentsContent } from '@/components/News';
import { MainContent } from '@/components/Main';

const CommentsPage = ({ params }: { params: Record<string, string> }) => {
  const { locale = 'en' } = params;

  return (
    <>
      <Meta title={"Sora AI News: Latest Updates & Breakthroughs in AI Technology"} description={"Discover the latest Sora AI news, including breakthroughs, updates, and insights in AI technology. Stay informed about the future of AI with Sora."} keywords={'Sora AI News, AI Technology Updates, AI Breakthroughs, AI Insights, Future of AI'} locale={locale} />
      <MainContent>
      <h1 className="mt-2 text-3xl font-bold tracking-tight text-main-text sm:text-4xl text-center">
        Latest Sora AI News & Insights
        </h1>
        <CommentsContent />
      </MainContent>
    </>

  );
};

export default CommentsPage;
