import React from 'react'
import { MotionDiv } from '../motion-div'

type Props = {
  children: React.ReactNode
}

export function FloatActionRoot({ children }: Props) {
  return (
    <MotionDiv
      initial={{ opacity: 0 }}
      className="flex flex-row justify-center items-center space-x-6 fixed bottom-0 bg-highlight/20 backdrop-blur-3xl w-full z-20 p-4"
    >
      {children}
    </MotionDiv>
  )
}
