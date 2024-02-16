import { Meta } from '@/components/Meta';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { SocialShare } from '@/components/SocialShare';
import { GridList } from '@/components/GridList';

const PromptsPage = ({ params }: { params: Record<string, string> }) => {
  const { locale = 'en' } = params;

  return (
    <>
      <Meta title={"The latest videos generated by sora"} description={"Collected from internet, welcome to submit your videos"} locale={locale} />
      <Header />
      <div className=' w-full h-full mt-24 flex flex-col items-center'>
      <h1 className="mt-2  text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
        {`The latest videos generated by Sora`}
      </h1>
      <div className="max-w-xl">
        <p>
          Collected from internet, welcome to submit your videos
        </p>
      </div>
      <div className='py-4 my-4 w-full px-20 overflow-auto'>
        <GridList />
      </div>
      </div>
      
      <Footer />
      <SocialShare className={['fixed top-[30%] left-2 flex-col gap-2 z-[2000] hidden lg:flex']} />
    </>

  );
};

export default PromptsPage;
