
export interface GenerateVideoData {
  revised_prompt: string;
  url: string;
}
export interface GenerateVideoResponse {
  data: Array<GenerateVideoData>;
}
