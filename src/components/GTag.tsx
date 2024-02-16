import Script from "next/script"

export const GTag = () => {
  return <>
    <Script async src="https://www.googletagmanager.com/gtag/js?id=G-1WVSSTY0NN"></Script>
    <Script id="gtag" async src="ss" dangerouslySetInnerHTML={{
      __html: `window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-1WVSSTY0NN');`}} />
  </>
}