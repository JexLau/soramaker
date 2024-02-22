import { MainContent } from "@/components/Main";
import { Meta } from "@/components/Meta";
import { PageCompoent } from "./PageComponent";
import { unstable_setRequestLocale } from "next-intl/server";
import { allVideoList } from "@/constants/videos";

// https://next-intl-docs.vercel.app/docs/getting-started/app-router#static-rendering
export function generateStaticParams() {
  return allVideoList.map((item) => ({ id: item.id }));
}

export default function DefaultPage({ params }: { params: Record<string, string> }) {
  const { locale = 'en', id } = params;
  const upperWord = id.toUpperCase();

  return (<>
    <Meta title={`Explore with Sora: ${upperWord} AI-Generated Video Prompt | Sora Maker AI`} description={`DExplore the ${upperWord} video prompt on Sora Maker AI. Dive into a unique AI-generated visual narrative and unleash your creativity by submitting your own prompts.`} keywords={'Sora Maker AI, Mitten Astronaut, Video Prompt, AI-Generated Video, Creative Prompts, Visual Narrative, User Submissions'} locale={locale} />
    <MainContent>
      <PageCompoent id={id} />
    </MainContent>
  </>
  );
}
