import { ComponentProps } from 'react'

type Props = ComponentProps<'ol'>

export function TimelineRoot(props: Props) {
  return (
    <ol className="w-full border-l border-secondary flex flex-col space-y-5">
      {props.children}
    </ol>
  )
}
