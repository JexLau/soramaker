import { cookies } from 'next/headers'
import { NextResponse } from 'next/server'
import { createClient } from '@/lib/supabase/action'

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const email = searchParams.get('email')

  if (email) {
    const cookieStore = cookies()
    const supabase = createClient(cookieStore)
    const { error } = await supabase.from('user').upsert([{ email }]);
    if (!error) {
      return NextResponse.json({
        status: 200,
        data: email,
      });
    } else {
      return NextResponse.json({
        status: 500,
        data: email,
        error,
      });
    }
  }

  return NextResponse.json({
    status: 500,
    data: email,
  });
}
