'use client'
import { PrimaryButton, PrimaryButtonProps } from "../Button"

export const ButtonClient = (props: PrimaryButtonProps) => {
  return (
    <div>
      <PrimaryButton onClick={() => console.log('dddd')}>
        {props.children}
      </PrimaryButton>
    </div>
  )
}