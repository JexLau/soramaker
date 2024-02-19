import { Meta } from '@/components/Meta';
import { MainContent } from '@/components/Main';
import { files } from './prompts';
import { VideoMasonry } from '@/components/Waterfall';

const PromptsPage = ({ params }: { params: Record<string, string> }) => {
  const { locale = 'en' } = params;

  return (
    <>
      <Meta title={"Explore the Latest AI-Generated Videos by Sora | Submit Your Own - SoraMaker AI"} description={"Dive into an ever-growing collection of AI-generated videos by Sora, sourced from the global community. Discover the magic of AI creativity and contribute your own masterpieces to be featured!"} locale={locale} />
      <MainContent>
        <h1 className="text-3xl font-bold tracking-tight text-main-text sm:text-4xl text-center">
          {`Latest AI-Created Videos by Sora`}
        </h1>
        <div className="w-full mt-6 text-center px-4">
          <p>
            Dive into an ever-growing collection of AI-generated videos by Sora, sourced from the global community. 
          </p>
          <p>Discover the magic of AI creativity and contribute your own masterpieces to be featured!</p>
        </div>
        <div className='py-4 my-4 w-full lg:px-20 px-4 overflow-auto'>
          <VideoMasonry videos={files} />
        </div>
      </MainContent>
    </>

  );
};

export default PromptsPage;
