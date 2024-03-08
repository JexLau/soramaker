import { useTranslations } from "next-intl"

export function DescSection() {
  const t = useTranslations('DescSection')
  return (
    <div className="relative mt-10 px-6 pb-12 lg:px-8">
      <div className="mx-auto max-w-4xl text-base leading-7 text-main-text">
        <h2 className="text-4xl font-bold tracking-tight text-main-text">{'Introducing'}</h2>
        <h3 className="mt-6 text-2xl font-semibold text-main-text">
          Harms or Risks
        </h3>
        <p className="mt-3">
          Today, Sora is becoming available to red teamers to assess critical areas for harms or risks. We are also granting access to a number of visual artists, designers, and filmmakers to gain feedback on how to advance the model to be most helpful for creative professionals.
        </p>
        <p className="mt-3">
          We’re sharing our research progress early to start working with and getting feedback from people outside of OpenAI and to give the public a sense of what AI capabilities are on the horizon.
        </p>
        <h3 className="mt-6 text-2xl font-semibold text-main-text">
          Complex Scenes With Multiple Characters
        </h3>
        <p className="mt-3">
          Sora is able to generate complex scenes with multiple characters, specific types of motion, and accurate details of the subject and background. The model understands not only what the user has asked for in the prompt, but also how those things exist in the physical world.
        </p>
        <h3 className="mt-6 text-2xl font-semibold text-main-text">
          Create Multiple Shots Within a Single Generated Video
        </h3>
        <p className="mt-3">
          The model has a deep understanding of language, enabling it to accurately interpret prompts and generate compelling characters that express vibrant emotions. Sora can also create multiple shots within a single generated video that accurately persist characters and visual style.
        </p>
        <h3 className="mt-6 text-2xl font-semibold text-main-text">
          Weaknesses
        </h3>
        <p className="mt-3">
          The current model has weaknesses. It may struggle with accurately simulating the physics of a complex scene, and may not understand specific instances of cause and effect. For example, a person might take a bite out of a cookie, but afterward, the cookie may not have a bite mark.
        </p>
        <p className="mt-3">
          The model may also confuse spatial details of a prompt, for example, mixing up left and right, and may struggle with precise descriptions of events that take place over time, like following a specific camera trajectory.
        </p>

        <div className="mt-16">
          <h2 className="text-4xl font-bold tracking-tight text-main-text">
            How to Use Sora - OpenAI
          </h2>
          <p className="mt-6">
            {`OpenAI’s Sora Turns AI Prompts Into Photorealistic Videos. OpenAI's entry into generative AI video is an impressive first step. The model can generate videos up to a minute long while maintaining visual quality and adherence to the user’s prompt.`}
          </p>
          <ul role="list" className="my-8 mt-8 space-y-8 text-main-text">
            <li className="flex gap-x-3">
              <span>
                {`OpenAI didn’t let me enter my own prompts, but it shared four instances of Sora’s power. (None approached the purported one-minute limit; the longest was 17 seconds.) The first came from a detailed prompt that sounded like an obsessive screenwriter’s setup: “Beautiful, snowy Tokyo city is bustling. The camera moves through the bustling city street, following several people enjoying the beautiful snowy weather and shopping at nearby stalls. Gorgeous sakura petals are flying through the wind along with snowflakes.”`}


              </span>
            </li>
            <li className="flex gap-x-3">
              <span>
                {`The result is a convincing view of what is unmistakably Tokyo, in that magic moment when snowflakes and cherry blossoms coexist. The virtual camera, as if affixed to a drone, follows a couple as they slowly stroll through a streetscape. One of the passersby is wearing a mask. Cars rumble by on a riverside roadway to their left, and to the right shoppers flit in and out of a row of tiny shops.`}
              </span>
            </li>
            <li className="flex gap-x-3">
              <span>
                <p>
                  {`It’s not perfect. Only when you watch the clip a few times do you realize that the main characters—a couple strolling down the snow-covered sidewalk—would have faced a dilemma had the virtual camera kept running. The sidewalk they occupy seems to dead-end; they would have had to step over a small guardrail to a weird parallel walkway on their right. Despite this mild glitch, the Tokyo example is a mind-blowing exercise in world-building. Down the road, production designers will debate whether it’s a powerful collaborator or a job killer. Also, the people in this video—who are entirely generated by a digital neural network—aren’t shown in close-up, and they don’t do any emoting. But the Sora team says that in other instances they’ve had fake actors showing real emotions.
`}
                </p>
              </span>
            </li>
            <li className="flex gap-x-3">
              <span>
                <p>
                  {`The other clips are also impressive, notably one asking for “an animated scene of a short fluffy monster kneeling beside a red candle,” along with some detailed stage directions (“wide eyes and open mouth”) and a description of the desired vibe of the clip. Sora produces a Pixar-esque creature that seems to have DNA from a Furby, a Gremlin, and Sully in Monsters, Inc. I remember when that latter film came out, Pixar made a huge deal of how difficult it was to create the ultra-complex texture of a monster’s fur as the creature moved around. It took all of Pixar’s wizards months to get it right. OpenAI’s new text-to-video machine … just did it.`}
                </p>
              </span>
            </li>
          </ul>
          <video controls className="aspect-video w-full rounded-xl bg-gray-50 object-cover">
            <source src="https://media.wired.com/clips/65cd6097640589f91cb00713/720p/pass/monster.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
    </div>
  )
}
