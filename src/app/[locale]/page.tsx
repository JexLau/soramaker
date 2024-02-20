// import { CallToAction } from '@/components/CallToAction'
import { ContentSection } from '@/components/ContentSection'
// import { DataFieldSection } from '@/components/DataFieldSection'
import { DescSection } from '@/components/DescSection'
// import { Faqs } from '@/components/Faqs'
// import { Hero } from '@/components/Hero'
// import { HowToWorkSection } from '@/components/HowToWorkSection'
import { MainContent } from '@/components/Main'
import { Marquee } from '@/components/Marquee'
import { Meta } from '@/components/Meta'
// import { Pricing } from '@/components/Pricing'
// import { PrimaryFeatures } from '@/components/PrimaryFeatures'
// import { SocialShare } from '@/components/SocialShare'
// import { Testimonials } from '@/components/Testimonials'
import { useTranslations } from 'next-intl'

export default function Home({ params }: { params: Record<string, string> }) {
  const { locale = 'en' } = params;
  const t = useTranslations('Index')
  const ct = useTranslations('Common')
  return (
    <>
      <Meta title={'Sora by OpenAI: Revolutionizing Content Creation with AI Text-to-Video Technology - SoraMaker AI'} description={"Experience the future of content creation with Sora, OpenAI's pioneering AI text-to-video tool. Transform your stories into captivating videos effortlessly. Ideal for creators, marketers, and educators."} keywords='Sora OpenAI, AI Text-to-Video, Content Creation, AI Video Generation, Creative AI Tools, Multimedia Content' locale={locale} />
      <MainContent>
        <Marquee />
        <ContentSection />
        <DescSection />
      </MainContent>
    </>
  )
}
