'use client'

import { useEffect, useState } from 'react'

import { useScroll } from 'framer-motion'
import { ArrowUp } from 'lucide-react'
import { useRouter } from 'next/navigation'

import { MotionDiv } from '../motion-div'
import { Button } from '../ui/button'

export function FloatActionArrow() {
  const { scrollYProgress } = useScroll()
  const router = useRouter()

  const [scroll, setScroll] = useState(0)
  const hasScroll = scroll > 0

  useEffect(() => {
    scrollYProgress.on('change', setScroll)
    return () => scrollYProgress.clearListeners()
  }, [scrollYProgress])

  function handleClick() {
    if (!hasScroll) {
      return router.back()
    }

    return window.scrollTo({
      behavior: 'smooth',
      top: 0,
    })
  }

  return (
    <Button
      variant="secondary"
      className="flex items-center justify-center p-2 w-9 h-9"
      onClick={handleClick}
    >
      <MotionDiv initial={{}} animate={{ rotate: !hasScroll ? '-90deg' : 0 }}>
        <ArrowUp className="w-4 h-4" />
      </MotionDiv>
    </Button>
  )
}
