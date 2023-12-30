'use client'

import { Code2 } from 'lucide-react'
import { Typewriter } from 'react-simple-typewriter'
import { Title } from './title'

export function Logo() {
  return (
    <div className="flex items-center gap-2">
      <Code2 className="text-highlight" />

      <Title className="text-2xl">
        <Typewriter words={['lmiguelm_', 'lm technology']} loop cursor />
      </Title>
    </div>
  )
}
