import { ContentSection } from '@/components/ContentSection'
import { DescSection } from '@/components/DescSection'
import { MainContent } from '@/components/Main'
import { Marquee } from '@/components/Marquee'
import { Meta } from '@/components/Meta'
import { Playground } from '@/components/Playground'
import { useTranslations } from 'next-intl'
import { unstable_setRequestLocale } from 'next-intl/server'
import { getNewsData } from './sora-news/getNewsData'
import { NewsList } from '@/components/NewsList'

export default function Home({ params }: { params: Record<string, string> }) {
  const { locale = 'en' } = params;
  unstable_setRequestLocale(locale);

  const t = useTranslations('Index')
  const ct = useTranslations('Common')
  const posts = getNewsData().slice(0, 3);

  return (
    <>
      <Meta title={'By OpenAI: Free Use AI Video Generator Online - Sora Maker'} description={"Creativity OpenAI Sora's playground: a free-use ai video generator where prompts and tools turn ideas into videos"} keywords='Sora OpenAI, Text-to-Video, AI Video Generator, Creative AI Tools, Online Video Maker, Free Easy Video Maker' locale={locale} />
      <MainContent>
        <Marquee />
        <ContentSection />
        <Playground numbers={3} />
        <div className="mx-auto max-w-4xl text-center my-4">
          <h2 className="text-main-text text-xl lg:text-4xl flex justify-center items-center my-6 text-center">
            Latest Sora AI News & Insights
          </h2>
          <p className="my-8 text-main-text text-center">
            Discover daily updates on the latest Sora AI News & Insights at Soramaker.ai. Dive into the world of AI innovation with fresh, engaging content every day. Stay ahead in the AI landscape with our expert analysis and in-depth articles.
          </p>
          <NewsList list={posts} />
        </div>
        <DescSection />
      </MainContent>
    </>
  )
}
