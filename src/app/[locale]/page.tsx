import { CallToAction } from '@/components/CallToAction'
import { ContentSection } from '@/components/ContentSection'
import { DataFieldSection } from '@/components/DataFieldSection'
import { DescSection } from '@/components/DescSection'
import { Faqs } from '@/components/Faqs'
import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { Hero } from '@/components/Hero'
import { HowToWorkSection } from '@/components/HowToWorkSection'
import { Meta } from '@/components/Meta'
import { Pricing } from '@/components/Pricing'
import { PrimaryFeatures } from '@/components/PrimaryFeatures'
import { Replace } from '@/components/Replace'
import { SocialShare } from '@/components/SocialShare'
// import { Testimonials } from '@/components/Testimonials'
import { useTranslations } from 'next-intl'

export default function Home({ params }: { params: Record<string, string> }) {
  const { locale = 'en' } = params;
  const t = useTranslations('Index')
  const ct = useTranslations('Common')
  const source = locale === 'zh' ? 'https://www.modelscope.cn/inner/studio/gradio?backend_url=/api/v1/studio/damo/ReplaceAnything/gradio/&sdk_version=3.47.1' : 'https://modelscope-replaceanything.hf.space/?__theme=light'
  return (
    <>
      <Meta title={t('title')} description={t('description')} locale={locale} />
      <Header downloadText={ct("Free to try")} />
      <ContentSection src={source} />
      {/* <Hero /> */}
      <Replace src={source} className={locale === 'zh' ? ['lg:-top-64 max-sm:-top-80'] : []} />
      <DescSection />
      <Faqs />
      <Footer />
      <SocialShare className={['fixed top-[30%] left-2 flex-col gap-2 z-[2000] hidden lg:flex']} />
    </>
  )
}
