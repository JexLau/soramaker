'use client'
import { EnvelopeIcon } from "@heroicons/react/16/solid"
import { FreeToTry } from "../DownloadBtn"
import { postEmail } from "@/requests"
import { useState } from "react"

export const WaitlistClient = () => {
  const [isLoading, setLoading] = useState(false);
  const handleEmail = async () => {
    setLoading(true)
    // 获取email
    const email = document.getElementById('email') as HTMLInputElement
    // 发送请求
    if (email.value) {
      const res = await postEmail(email.value)
      console.log(res)
      if(res.status === 200) {
        setLoading(false)
        email.value = ''
        // 提示成功
        alert('Success! You have been added to the waitlist')
      }
    }
  }
  return (
    <div className="mt-4 rounded-md shadow-sm w-full flex items-center justify-between">
      <div className="relative flex-1 mr-4">
        <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
          <EnvelopeIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
        </div>
        <input
          type="email"
          name="email"
          id="email"
          className="block bg-transparent w-full rounded-md border-0 py-1.5 pl-10 text-main-text ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          placeholder="you@example.com"
        />
      </div>
      <FreeToTry text="Join WaitList" isLoading={isLoading} onClick={() => handleEmail()} />
      
    </div>

  )
}