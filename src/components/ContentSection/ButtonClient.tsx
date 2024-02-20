'use client'
import { PrimaryButton, PrimaryButtonProps } from "../Button"
import { FreeToTry } from "../DownloadBtn"

export const ButtonClient = (props: PrimaryButtonProps) => {
  return (
      <FreeToTry text="Join WaitList" onClick={() => console.log('dddd')} >


      </FreeToTry>
  )
}