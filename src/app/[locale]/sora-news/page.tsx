import { Meta } from '@/components/Meta';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { CommentsContent } from '@/components/News';
import { MainContent } from '@/components/Main';

const CommentsPage = ({ params }: { params: Record<string, string> }) => {
  const { locale = 'en' } = params;

  return (
    <>
      <Meta title={"Creating video from text (openai.com)"} description={"Hacker News For Sora, OpenAI's text-to-video generator, can generate complex scenes with multiple characters, specific types of motion, and accurate details of the subject and background. It can also animate still images."} locale={locale} />
      <MainContent>
        <CommentsContent />
      </MainContent>
    </>

  );
};

export default CommentsPage;
