'use client'

import { motion, MotionProps, useInView } from 'framer-motion'
import { useRef } from 'react'

type Props = MotionProps & {
  className?: string
}

export function MotionDiv({ ...props }: Props) {
  const motionDivRef = useRef<HTMLDivElement>(null)

  const isInView = useInView(motionDivRef)

  const animationFromValue = props.initial ?? {
    opacity: 0.75,
    scale: 0.9,
    translateY: 20,
    rotateX: 10,
  }

  const animateToValue = props.animate ?? {
    opacity: 1,
    scale: 1,
    translateY: 0,
    rotateX: 0,
  }

  const animationIsInView = isInView ? animateToValue : animationFromValue

  return (
    <motion.div
      ref={motionDivRef}
      transition={{
        type: 'spring',
      }}
      {...props}
      initial={animationFromValue}
      animate={animationIsInView}
    >
      {props.children}
    </motion.div>
  )
}
