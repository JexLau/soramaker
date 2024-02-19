import Script from "next/script"

export const GTag = () => {
  if (process.env.NODE_ENV !== "production") {
    return null
  }
  return <>
    <Script async src="https://www.googletagmanager.com/gtag/js?id=G-KE5E4DQ1VV"></Script>
    <Script id="gtag" async dangerouslySetInnerHTML={{
      __html: `window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-KE5E4DQ1VV');`}} />
  </>
}