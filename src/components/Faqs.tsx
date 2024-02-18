import Image from 'next/image'

import { Container } from '@/components/Container'
import backgroundImage from '@/images/background-faqs.jpg'
import { useTranslations } from 'next-intl'


export function Faqs() {
  const  t = useTranslations('Faqs')

const faqs = [
  [
    {
      "question": t('q0'),
      "answer": t('a0')
    },
    {
      "question": t('q1'),
      "answer": t('a1')
    },
  ],
  [
    {
      "question": t('q2'),
      "answer": t('a2')
    }, {
      "question": t('q3'),
      "answer": t('a3')
    },],
  [

    {
      "question": t('q4'),
      "answer": t('a4')
    },
    {
      "question": t('q5'),
      "answer": t('a5')
    }
  ]
]
  return (
    <section
      id="faq"
      aria-labelledby="faq-title"
      className="relative bg-slate-50 py-20 sm:py-32"
    >
      <Image
        className="absolute left-1/2 top-0 max-w-none -translate-y-1/4 translate-x-[-30%] hidden lg:inline-block"
        src={backgroundImage}
        alt=""
        width={1558}
        height={946}
        unoptimized
      />
      <Container className="relative">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2
            id="faq-title"
            className="font-display text-3xl tracking-tight text-main-text sm:text-4xl"
          >
            {t('h2')}
          </h2>
          <p className="mt-4 text-lg tracking-tight text-slate-700">
            {t('desc1')}
            {/* {t('desc3')} */}
          </p>
        </div>
        <ul
          role="list"
          className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 lg:max-w-none lg:grid-cols-3"
        >
          {faqs.map((column, columnIndex) => (
            <li key={columnIndex}>
              <ul role="list" className="flex flex-col gap-y-8">
                {column.map((faq, faqIndex) => (
                  <li key={faqIndex}>
                    <h3 className="font-display text-lg leading-7 text-main-text">
                      {faq.question}
                    </h3>
                    <p className="mt-4 text-sm text-slate-700">{faq.answer}</p>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  )
}
