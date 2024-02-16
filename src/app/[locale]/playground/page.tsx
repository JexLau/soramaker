import { Example } from '@/components/Examples'
import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { Meta } from '@/components/Meta'
import { SocialShare } from '@/components/SocialShare'
import { useTranslations } from 'next-intl'

export default function Home({ params }: { params: Record<string, string> }) {
  const { locale = 'en' } = params;
  const t = useTranslations('Playground')
  const ct = useTranslations('Common')
  return (
    <>
      <Meta title={t('title')} description={t('description')} locale={locale} />
      <Header downloadText={ct("Free to try")} />
      <Example />
      <Footer />
      <SocialShare className={['fixed top-[30%] left-2 flex-col gap-2 z-[2000] hidden lg:flex']} />
    </>
  )
}
