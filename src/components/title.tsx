import { exo2 } from '@/app/fonts'
import { ComponentProps } from 'react'
import { twMerge } from 'tailwind-merge'

type Props = ComponentProps<'h2'>

export function Title(props: Props) {
  return (
    <h1 className={twMerge(exo2.className, 'text-2xl', props.className)}>
      {props.children}
    </h1>
  )
}
