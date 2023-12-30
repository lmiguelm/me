'use client'

import { Star as LucidStar } from 'lucide-react'

import { motion } from 'framer-motion'

export function Star() {
  return (
    <motion.div
      initial={{
        opacity: 0,
        scale: 0,
      }}
      animate={{
        opacity: 1,
        scale: 1,
      }}
      transition={{
        type: 'spring',
      }}
      whileHover={{
        scale: 1.25,
      }}
    >
      <LucidStar className="fill-yellow-500 w-4 h-4 text-yellow-500/80 mt-1" />
    </motion.div>
  )
}
