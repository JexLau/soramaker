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
      <Meta title={'Sora by OpenAI: Revolutionizing Content Creation with AI Text-to-Video Technology - Sora Maker AI'} description={"Experience the future of content creation with Sora, OpenAI's pioneering AI text-to-video tool. Transform your stories into captivating videos effortlessly. Ideal for creators, marketers, and educators."} keywords='Sora OpenAI, AI Text-to-Video, Content Creation, AI Video Generation, Creative AI Tools, Multimedia Content' locale={locale} />
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
