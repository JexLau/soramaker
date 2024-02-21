import { GenerateVideoResponse } from "./typings";

export const postEmail = async (email: string) => {
  const response = await fetch(`/api/waitlist?email=${email}`);
  const data = await response.json();
  return data;
}

export const postGenerateVideo = async (prompt: string): Promise<GenerateVideoResponse> => {
  const body = {
    "model": "dell-3",
    "prompt": prompt,
    "size": "1920X1080"
  };
  const response = await fetch(`/api/generate`, {
    method: 'POST',
    body: JSON.stringify(body),
    headers: {
      'content-type': 'application/json',
    },
  });
  const result = await response.json();
  return result;
}