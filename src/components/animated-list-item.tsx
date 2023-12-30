'use client'

import { motion, MotionProps } from 'framer-motion'

type Props = MotionProps & {
  initialX?: number
}

export function AnimatedListItem(props: Props) {
  return (
    <motion.div
      initial={{ x: props.initialX ?? 50, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ type: 'spring' }}
    >
      {props.children}
    </motion.div>
  )
}
