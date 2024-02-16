import { useTranslations } from "next-intl"

export function DescSection() {
  const t = useTranslations('DescSection')
  return (
    <div className="bg-white px-6 lg:px-8 relative z-[1000] pb-12">
      <div className="mx-auto max-w-4xl text-base leading-7 text-gray-700">
        <h2 className="text-4xl font-bold tracking-tight text-gray-900">{t("Introducing")}</h2>
        <h3 className="mt-6 font-semibold text-gray-900 text-2xl">
          Harms or Risks
        </h3>
        <p className="mt-3">
          Today, Sora is becoming available to red teamers to assess critical areas for harms or risks. We are also granting access to a number of visual artists, designers, and filmmakers to gain feedback on how to advance the model to be most helpful for creative professionals.
        </p>
        <p className="mt-3">
          We’re sharing our research progress early to start working with and getting feedback from people outside of OpenAI and to give the public a sense of what AI capabilities are on the horizon.
        </p>
        <h3 className="mt-6 font-semibold text-gray-900 text-2xl">
          Complex Scenes With Multiple Characters
        </h3>
        <p className="mt-3">
          Sora is able to generate complex scenes with multiple characters, specific types of motion, and accurate details of the subject and background. The model understands not only what the user has asked for in the prompt, but also how those things exist in the physical world.
        </p>
        <h3 className="mt-6 font-semibold text-gray-900 text-2xl">
          Create Multiple Shots Within a Single Generated Video
        </h3>
        <p className="mt-3">
          The model has a deep understanding of language, enabling it to accurately interpret prompts and generate compelling characters that express vibrant emotions. Sora can also create multiple shots within a single generated video that accurately persist characters and visual style.
        </p>
        <h3 className="mt-6 font-semibold text-gray-900 text-2xl">
          Weaknesses
        </h3>
        <p className="mt-3">
          The current model has weaknesses. It may struggle with accurately simulating the physics of a complex scene, and may not understand specific instances of cause and effect. For example, a person might take a bite out of a cookie, but afterward, the cookie may not have a bite mark.
        </p>
        <p className="mt-3">
          The model may also confuse spatial details of a prompt, for example, mixing up left and right, and may struggle with precise descriptions of events that take place over time, like following a specific camera trajectory.
        </p>

        <div className="mt-16">
          <h2 className="text-4xl font-bold tracking-tight text-gray-900">
            {t("t3")}
          </h2>
          <p className="mt-6">
            {t("d3")}
          </p>
          <ul role="list" className="mt-8 my-8 space-y-8 text-gray-600">
            <li className="flex gap-x-3">
              <span>
                <h3 className="font-semibold text-gray-900">⭐️ Step 1</h3>
                {t('s1')}
              </span>
            </li>
            <li className="flex gap-x-3">
              <span>
                <h3 className="font-semibold text-gray-900">⭐️ Step 2</h3>
                {t('s2')}
              </span>
            </li>
            <li className="flex gap-x-3">
              <span>
                <h3 className="font-semibold text-gray-900">⭐️ Step 3</h3>{t('s3')}
              </span>
            </li>
            <li className="flex gap-x-3">
              <span>
                <h3 className="font-semibold text-gray-900">⭐️ Step 4 (Optional) </h3>
                {t('s4')}
              </span>
            </li>
          </ul>
          <img
            className="aspect-video rounded-xl bg-gray-50 object-cover"
            src="/howtouse.gif"
            alt=""
          />
        </div>
      </div>
    </div>
  )
}
