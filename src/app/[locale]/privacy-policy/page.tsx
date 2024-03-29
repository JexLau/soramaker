import { MainContent } from "@/components/Main"
import { Meta } from "@/components/Meta"

const PolicyPage = ({ params }: { params: Record<string, string> }) => {
  const { locale = 'en' } = params;

  return (
    <>
      <Meta title={"Sora Maker AI Privacy Policy | Data Protection & User Privacy"} description={"Discover how Sora Maker AI respects and protects your privacy. Learn about our data collection, usage, and security measures to safeguard your personal information on our AI video generation platform."} keywords="Sora Maker AI, Privacy Policy, Data Protection, User Privacy, Personal Information Security, AI Video Platform" locale={locale}  pageurl="/privacy-policy" />
      <MainContent>
        <div className="leading-loose px-10 w-[95%] lg:w-[60%] mx-auto">
          <h1 className="text-3xl font-bold my-10 tracking-tight text-main-text sm:text-4xl text-center">
            Privacy Policy
          </h1>
          <p className=" leading-10">{"Last Updated: February 20, 2024"}</p>
          <p className=" leading-10">{"Thank you for choosing Sora Maker AI! This Privacy Policy explains our practices regarding the collection, use, and protection of your information when you interact with our platform located at "}
            <a href="https://soramaker.ai" className="underline text-main-blue">soramaker.ai</a>
          </p>
          <h2 className={"text-white text-2xl my-8 font-bold"}>{"1、Information We Collect:"}</h2>
          <p className=" leading-10">{"a. Personal Data: When you use Sora Maker AI, we may collect your name, email address, and payment information for order processing purposes."}</p>
          <p className=" leading-10">{"b. Non-Personal Data: We may also collect non-personal data through web cookies to enhance your browsing experience."}</p>
          <h2 className={"text-white text-2xl my-8 font-bold"}>{"2、Purpose of Data Collection:"}</h2>
          <p className=" leading-10">We collect your personal data solely for order processing purposes.</p>
          <h2 className={"text-white text-2xl my-8 font-bold"}>3、Data Sharing:</h2>
          <p className=" leading-10">{"We do not share your personal data with any third parties."}</p>
          <h2 className={"text-white text-2xl my-8 font-bold"}>{"4、Children's Privacy:"}</h2>
          <p className=" leading-10">{"Sora Maker AI does not knowingly collect any personal data from children."}</p>
          <h2 className={"text-white text-2xl my-8 font-bold"}>{"5、Updates to the Privacy Policy:"}</h2>
          <p className=" leading-10">We will notify users of any updates to this Privacy Policy via email.</p>
          <h2 className={"text-white text-2xl my-8 font-bold"}>{"6、Contact Information:"}</h2>
          <p className=" leading-10">
            If you have any questions or concerns regarding our Privacy Policy, please contact us at <a href="mailto:soramakerai@gmail.com" className="underline text-main-blue">soramakerai@gmail.com</a>.
          </p>
        </div>
      </MainContent>
    </>
  )

}

export default PolicyPage
