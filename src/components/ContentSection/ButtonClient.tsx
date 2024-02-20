'use client'
import { PrimaryButton } from "../Button"

export const ButtonClient = () => {
  return (
    <div>
      <PrimaryButton onClick={() => console.log('dddd')}>Join WaitList</PrimaryButton>
    </div>
  )
}