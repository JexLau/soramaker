import { MainContent } from "@/components/Main";
import { Meta } from "@/components/Meta";
import { PageCompoent } from "./PageComponent";
import { allVideoList } from "@/constants/videos";

// https://next-intl-docs.vercel.app/docs/getting-started/app-router#static-rendering
export function generateStaticParams() {
  return allVideoList.map((item) => ({ id: item.id }));
}

export default function DefaultPage({ params }: { params: Record<string, string> }) {
  const { locale = 'en', id } = params;
  // 首字母大写
  const upperWord = id.charAt(0).toUpperCase() + id.slice(1);

  return (<>
    <Meta
      title={`Explore with Sora: ${upperWord} AI-Generated Video Prompt | Sora Maker AI`} description={`Explore the ${upperWord} video prompt on Sora Maker AI. Dive into a unique AI-generated visual narrative and unleash your creativity by submitting your own prompts.`} keywords={'Sora Maker AI, Mitten Astronaut, Video Prompt, AI-Generated Video, Creative Prompts, Visual Narrative, User Submissions'}
      locale={locale}
      pageurl={`/sora-prompts/${id}`}
      image={`https://soramaker.ai/covers/${id}.jpg`}
    />
    <MainContent className="!pt-0">
      <PageCompoent id={id} />
    </MainContent>
  </>
  );
}
