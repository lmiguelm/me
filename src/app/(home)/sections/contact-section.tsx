import { DiscordLogoIcon } from '@radix-ui/react-icons'
import { Mail } from 'lucide-react'

import { createClient } from '@/prismicio'

import { PrismicRichText } from '@prismicio/react'

import { Clipboard } from '@/components/clipboard'
import { LinearBackground } from '@/components/linear-background'
import { Subtitle } from '@/components/subtitle'

export async function ContactSection() {
  const client = createClient()

  const { data } = await client.getSingle('home', {
    fetch: ['home.contact', 'home.discord', 'home.email'],
  })

  return (
    <LinearBackground className="p-3 rounded-lg flex flex-col gap-3">
      <Subtitle>Contato</Subtitle>

      <div className="prose prose-sm prose-system text-justify">
        <PrismicRichText field={data.contact} />
      </div>

      <div className="flex flex-col items-start gap-3">
        <Clipboard position="right" textToBeCopied={data.discord ?? ''}>
          <DiscordLogoIcon className="h-4 w-4" />
        </Clipboard>

        <Clipboard position="right" textToBeCopied={data.email ?? ''}>
          <Mail className="h-4 w-4" />
        </Clipboard>
      </div>
    </LinearBackground>
  )
}
