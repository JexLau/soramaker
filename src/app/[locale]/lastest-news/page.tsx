import { Meta } from '@/components/Meta';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { SocialShare } from '@/components/SocialShare';
import { CommentsContent } from '@/components/News';

const CommentsPage = ({ params }: { params: Record<string, string> }) => {
  const { locale = 'en' } = params;

  return (
    <>
      <Meta title={"Creating video from text (openai.com)"} description={"Hacker News For Sora, OpenAI's text-to-video generator, can generate complex scenes with multiple characters, specific types of motion, and accurate details of the subject and background. It can also animate still images."} locale={locale} />
      <Header />
      <CommentsContent />
      <Footer />
      <SocialShare className={['fixed top-[30%] left-2 flex-col gap-2 z-[2000] hidden lg:flex']} />
    </>

  );
};

export default CommentsPage;
