import { ComponentProps } from 'react'
import { MotionDiv } from './motion-div'
import { Separator } from './ui/separator'

type Props = ComponentProps<typeof Separator>

export function AnimatedSeparator(props: Props) {
  return (
    <MotionDiv initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
      <Separator {...props} />
    </MotionDiv>
  )
}
