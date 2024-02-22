import { MainContent } from "@/components/Main";
import { Meta } from "@/components/Meta";
import { PageCompoent } from "./PageComponent";


export default function DefaultPage({ params }: { params: Record<string, string> }) {
  const { locale = 'en', id } = params;

  return (<>
    <Meta title={"Explore the Latest AI-Generated Videos by Sora | Submit Your Own - Sora Maker AI"} description={"Dive into an ever-growing collection of AI-generated videos by Sora, sourced from the global community. Discover the magic of AI creativity and contribute your own masterpieces to be featured!"} keywords={'Sora Prompts, AI Content Generation, Creative Writing, Artistic Inspiration, Content Creation Ideas'} locale={locale} />
    <MainContent>
      <PageCompoent id={id} />
    </MainContent>
  </>
  );
}
