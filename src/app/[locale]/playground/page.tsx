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
      <Meta title={t('title')} description={t('description')} locale={locale} />
      <MainContent>
        <Playground />
      </MainContent>
    </>
  )
}
