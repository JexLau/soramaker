'use client';
import { BlurImage } from "@/components/BlurImage";
import { CopyIconClient } from "@/components/Card/CopyIcon";
import { VideoPlayer } from "@/components/VideoPlayer";
import { allVideoList } from "@/constants/videos";
import { useEffect, useState } from "react";

interface VideoProps { id: string, src: string, prompt: string, source?: string }
export const PageClient = ({ id }: { id: string }) => {
  const [selectedContent, setSelectedContent] = useState<VideoProps | null>(null);
  // 模拟的内容和缩略图数据
  const videos = allVideoList.map((item) => {
    return item ? {
      id: item.id,
      src: item.videoUrl,
      prompt: item.prompt,
      source: "OpenAI"
    } : { id: '', src: '', prompt: '', source: '' }
  });

  useEffect(() => {
    if (id) {
      const content = videos.find((item) => item.id === id);
      content && setSelectedContent(content);
    }
  }, []);

  const handleThumbnailClick = (id: string) => {
    const content = videos.find((item) => item.id === id);
    content && setSelectedContent(content);
    history.pushState({}, '', `/sora-prompts/${id}`);
  };

  return <>
    <div className="grow flex pr-[140px]">
      <div className="w-2/3 bg-gradient-to-l from-[#667dea10] to-[#764ba210] bg flex items-center justify-center">
        <div className="w-[90%]">
          <VideoPlayer src={selectedContent?.src || videos[0].src} autoPlay />
        </div>
      </div>
      <div className="w-1/3 pl-[20px] py-4">
        <h1 className="text-3xl font-bold tracking-tight text-main-text sm:text-4xl text-left my-4">
          {`Prompt`}
        </h1>
        <p>{selectedContent?.prompt || videos[0].prompt} <CopyIconClient text={selectedContent?.prompt || videos[0].prompt} /></p>
      </div>
    </div>
    <div className="absolute overflow-auto rounded-xl h-auto right-2 inset-y-4 w-[100px] flex flex-col space-y-2">
      {videos.map((item) => <BlurImage onClick={() => handleThumbnailClick(item.id)} imageSrc={`/covers/${item.id}.jpg`} id={item.id} name={item.id} key={item.id} />)}
    </div>
  </>
}


export default PageClient;