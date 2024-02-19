import Script from "next/script"

// Umami 平台
export const Umami = () => {
  // <script async src="https://umami-six-phi.vercel.app/script.js" data-website-id="d98fac95-2bac-4685-bff8-48a66026ea46"></script>
  if (process.env.NODE_ENV !== "production") {
    return null
  }
  
  return <>
    <Script async src="https://umami-six-phi.vercel.app/script.js" data-website-id="d98fac95-2bac-4685-bff8-48a66026ea46"></Script>
  </>
}