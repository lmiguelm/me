import React from 'react'

type Props = {
  children: React.ReactNode
}

export function AnimatedBorderEffect(props: Props) {
  return (
    <div className="relative">
      <div className="max-lg:animate-none max-lg:hidden absolute -inset-1 bg-gradient-to-t from-muted-foreground to-highlight rounded-lg blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-tilt" />

      <div className="relative">{props.children}</div>
    </div>
  )
}
