import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  // 或者直接使用 '39386156' 替换 `req.query.id` 来获取特定帖子的评论
  const postId = searchParams.get('id') || '39386156';

  try {
    const response = await fetch(`https://hacker-news.firebaseio.com/v0/item/${postId}.json?print=pretty`);
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