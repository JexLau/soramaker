
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const commentId = searchParams.get('commentId');
  if(!commentId) return NextResponse.json({
    status: 400,
    data: [],
    msg: 'commentId is required.'
  });

  try {
    const response = await fetch(`https://hacker-news.firebaseio.com/v0/item/${commentId}.json?print=pretty`);
    const data = await response.json();
    return NextResponse.json({
      status: 200,
      data: data,
    });
  } catch (error) {
    console.log('请求第三方接口失败', error);
    return NextResponse.json({
      status: 500,
      data: [],
      msg: 'error.'
    });
  }
}