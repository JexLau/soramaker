import { Playground } from '@/components/Playground'
import { MainContent } from '@/components/Main';
import { Meta } from '@/components/Meta'
import { useTranslations } from 'next-intl'

export default function Home({ params }: { params: Record<string, string> }) {
  const { locale = 'en' } = params;
  const t = useTranslations('Playground')
  const ct = useTranslations('Common')
  return (
    <>
      <Meta title={"Sora Maker: Transforming AI Prompts into Photorealistic Videos | OpenAI Playground"} description={"Explore Sora Maker on OpenAI's Playground. Turn your AI prompts into stunning, photorealistic videos effortlessly. Start creating with Sora now and bring your ideas to life!"} keywords='Sora Playground, AI Creativity, Interactive AI, AI Tools, Innovation Platform, AI Experiments' locale={locale} />
      <MainContent>
        <h1 className="mt-2 text-3xl lg:text-5xl font-bold tracking-tight text-main-text text-center">Welcome to Sora Maker Playground</h1>
        <Playground />
      </MainContent>
    </>
  )
}
