import { ComponentProps } from 'react'
import { twMerge } from 'tailwind-merge'

type Variants = 'highlight' | 'secondary'

type Props = ComponentProps<'div'> & {
  variant?: Variants
}

export function LinearBackground({ variant = 'secondary', ...props }: Props) {
  return (
    <div
      {...props}
      className={twMerge(
        `border border-highlight bg-gradient-to-tr from-background to-${variant}`,
        props.className,
      )}
    >
      {props.children}
    </div>
  )
}
