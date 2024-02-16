import Script from "next/script"

export const GTag = () => {
  return <>
    <Script async src="https://www.googletagmanager.com/gtag/js?id=G-BM6KN3Y3PE"></Script>
    <Script id="gtag" async dangerouslySetInnerHTML={{
      __html: `window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-BM6KN3Y3PE');`}} />
  </>
}