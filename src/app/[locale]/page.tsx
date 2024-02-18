import { CallToAction } from '@/components/CallToAction'
import { ContentSection } from '@/components/ContentSection'
import { DataFieldSection } from '@/components/DataFieldSection'
import { DescSection } from '@/components/DescSection'
import { Faqs } from '@/components/Faqs'
import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
// import { Hero } from '@/components/Hero'
import { HowToWorkSection } from '@/components/HowToWorkSection'
import { MainContent } from '@/components/Main'
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
  return (
    <>
      <Meta title={t('title')} description={t('description')} locale={locale} />
      <MainContent>
        <ContentSection />
        <DescSection />
      </MainContent>
    </>
  )
}
