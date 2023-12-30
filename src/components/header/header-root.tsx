'use client'

import { motion, useScroll } from 'framer-motion'
import { useEffect, useRef, useState } from 'react'

type Props = {
  children: React.ReactNode
}

export function HeaderRoot({ children }: Props) {
  const previousScroll = useRef<number>(0)

  const { scrollYProgress } = useScroll()

  const [isHidden, setIsHidden] = useState(false)

  function updateScroll(currentScroll: number) {
    if (currentScroll <= previousScroll.current) {
      setIsHidden(false)
    } else if (currentScroll >= previousScroll.current) {
      setIsHidden(true)
    }

    previousScroll.current = currentScroll
  }

  useEffect(() => {
    scrollYProgress.on('change', updateScroll)
    return () => scrollYProgress.clearListeners()
  }, [scrollYProgress])

  return (
    <motion.header
      animate={isHidden ? { opacity: 0, y: -25 } : { opacity: 1, y: 0 }}
      transition={{ ease: [0.1, 0.25, 0.3, 1] }}
      className="fixed z-50 w-full h-14 flex p items-center justify-around max-sm:justify-between max-sm:px-3 border-b bg-background"
    >
      {children}
    </motion.header>
  )
}
