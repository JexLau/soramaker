'use client'
import { useState } from "react";
import { randomVideo } from "./openaiVideo";
import { postGenerateVideo } from "@/requests";
import { FreeToTry } from "../DownloadBtn";
import { MediaCard } from "../Card";
import { VideoMasonry } from "../Waterfall";
import { PrimaryButton } from "../Button";
import { VideoPlayer } from "../VideoPlayer";
import { CopyIconClient } from "../Card/CopyIcon";

export const PlayGroundFeture = () => {
  const [textStr, setTextStr] = useState('Example: Tour of an art gallery with many beautiful works of art in different styles.');
  const [tips, setTips] = useState('');
  const [isLoading, setLoading] = useState(false);
  const [video, setVideo] = useState({ revised_prompt: '', url: '' });

  const getRandomeVideo = () => {
    const videos = randomVideo().map((item) => {
      return item ? {
        id: item.id,
        src: item.videoUrl,
        prompt: item.prompt,
        source: "OpenAI"
      } : { id: '', src: '', prompt: '', source: '' }
    });
    return videos;
  }
  const initVideoList = getRandomeVideo()
  const [videoList, setVideoList] = useState<MediaCard[]>(initVideoList);

  const handleSubmit = async () => {
    try {
      setLoading(true);
      if (!textStr) {
        setTips('Please enter your prompt');
        const list = getRandomeVideo();
        setVideoList(list);
        return;
      }
      const result = await postGenerateVideo(textStr);
      if (!result.data?.[0]?.revised_prompt) {
        setTips('No video generated, please try again');
        return
      }

      setTips('');
      setVideo({
        revised_prompt: result.data[0].revised_prompt,
        url: result.data[0].url
      });
    } catch (error) {
      setLoading(false);
    } finally {
      setLoading(false);
    }
  }

  const renderForm = () => {
    return <>
      <form onSubmit={handleSubmit} className="relative shadow-lg lg:w-2/3 mr-6 w-full">
        <div className="overflow-hidden  focus-within:ring-1  ">
          <textarea
            rows={6}
            name="description"
            id="description"
            className="block w-full resize-none bg-transparent focus:ring-main-purple  text-main-text placeholder:text-gray-400 focus:ring-0 text-lg pt-4 pl-4"
            placeholder={'Enter your prompt here...'}
            value={textStr}
            onChange={(e) => {
              setTextStr(e.target.value);
            }}
            maxLength={1000}
          />
          {tips && <p className="text-red-500 text-sm absolute bottom-[52px] left-0 ml-4 mb-2">{tips}</p>}
        </div>
        <div
          className="flex justify-center items-center  py-6">
          <FreeToTry
            text="Generate Video"
            className="w-[300px] py-8"
            isLoading={isLoading}
            onClick={() => handleSubmit()}
          />
        </div>
      </form>
      <ul role="list" className="my-8 space-y-8 flex flex-col lg:w-1/3 w-full">
        <li>
          <h3 className="font-semibold text-main-text">⭐️ Step 1: Enter Your Prompt</h3>
        </li>
        <li>
          <h3 className="font-semibold text-main-text">⭐️ Step 2: Waiting for Video Generated</h3>
        </li>
        <li>
          <h3 className="font-semibold text-main-text">⭐️ Step 3: Enjoy the Video</h3>
        </li>
        <li>
          <h3 className="font-semibold text-main-text">⭐️ Step 4 (Optional): Download the Video </h3>
        </li>

      </ul>
    </>
  }

  const renderResult = () => {
    return <>
      <div className="lg:w-2/3 mr-6  w-full rounded-[16px] object-cover aspect-video  group-hover:opacity-75">
        <VideoPlayer src={video.url} autoPlay />
      </div>
      <figcaption className="my-6 space-y-8 flex flex-col lg:w-1/3 w-full">
        <h3 className="font-semibold text-main-text text-[26px]">Prompt</h3>
        <p> {video.revised_prompt} <CopyIconClient text={video.revised_prompt} /></p>
        {
          video.url && <FreeToTry
            text="Generate Retry"
            className="w-[300px] py-8 mx-auto"
            onClick={() => setVideo({ revised_prompt: '', url: '' })}
          />
        }
      </figcaption>
    </>
  }

  return (
    <div>
      <div className="overflow-hidden text-main-text lg:w-[80%] flex flex-col items-center mx-auto">
        <div className="mx-auto w-full lg:max-w-7xl lg:px-5 px-2 mb-5">
          <div className="my-8 text-center">
            <h2 className="text-main-text  text-xl lg:text-4xl">Transform AI Prompts into Videos</h2>
          </div>
          <div className="lg:flex lg:justify-between mt-2">
            {video.url ? renderResult() : renderForm()}
          </div>
          <div className={"w-full mx-auto"}>
            <div className={"pb-2"}>
              <h2 className={"text-main-text text-xl lg:text-4xl flex justify-center items-center my-6 text-center"}>{"Examples of Photorealistic Videos"}</h2>
              {/* go more Videos */}
              <div className="w-[220px] py-4 mx-auto mb-4">
                <PrimaryButton href="/sora-prompts">More Videos</PrimaryButton>
              </div>
            </div>
            <VideoMasonry videos={videoList} breakpointObj={{
              default: 4,
              '1536': 3,
              '1280': 2,
              1100: 1,
            }} />
          </div>
        </div>
      </div>
    </div>
  )


}

export default PlayGroundFeture;