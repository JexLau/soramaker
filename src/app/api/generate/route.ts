import { cookies, headers } from "next/headers";
import { createClient } from '@/lib/supabase/action';
import { getExampleVideo } from "./exampleVideo";

export async function POST(req: Request) {
  const headerAll = headers();
  const userIp = headerAll.get("x-forwarded-for");
  console.log('userIp -=-=-=-> ', userIp);
  const json = await req.json();
  // model
  const model = json.model;
  // prompt
  const prompt = json.prompt;
  // resolution of video
  const size = json.size;

  const apiKey = process.env.OPENAI_API_KEY;

  if (!apiKey) {
    const errorResult = {
      "error": {
        "code": null,
        "message": "Invalid authorization header",
        "param": null,
        "type": "server_error"
      }
    }
    return Response.json(errorResult);
  }

  if (!model) {
    const errorResult = {
      "error": {
        "code": null,
        "message": "Invalid model",
        "param": null,
        "type": "invalid_request_error"
      }
    }
    return Response.json(errorResult);
  }

  if (!prompt) {
    const errorResult = {
      "error": {
        "code": null,
        "message": "Invalid prompt",
        "param": null,
        "type": "invalid_request_error"
      }
    }
    return Response.json(errorResult);
  }

  if (!size) {
    const errorResult = {
      "error": {
        "code": null,
        "message": `${size} is not one of ['256x256', '512x512', '1024x1024', '1024x1792', '1792x1024'] - 'size'`,
        "param": null,
        "type": "invalid_request_error"
      }
    }
    return Response.json(errorResult);
  }

  // todo call openai api in the future


  // call local function now
  const resultVideo = await getExampleVideo(prompt);

  const cookieStore = cookies()
  const supabase = createClient(cookieStore)
  await supabase.from('prompt').upsert([{ prompt, ip: userIp }]);

  const successResult = {
    "data": [
      {
        "revised_prompt": resultVideo.revised_prompt,
        "url": resultVideo.video_url
      }
    ],
  }

  return Response.json(successResult);
}
