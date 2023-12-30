import { PrismicRichText } from '@prismicio/react'

import { LinearBackground } from '@/components/linear-background'
import { Link } from '@/components/link'
import { Subtitle } from '@/components/subtitle'
import { createClient } from '@/prismicio'

export async function AboutSection() {
  const client = createClient()

  const { data } = await client.getSingle('home', {
    fetch: ['home.about'],
  })

  return (
    <LinearBackground
      variant="highlight"
      className="flex-1 flex flex-col gap-3 rounded-lg p-3"
    >
      <div className="flex justify-between items-center">
        <Subtitle>Sobre</Subtitle>

        <Link href="/about" title="Ver mais" />
      </div>

      <main className="prose prose-system prose-sm text-justify">
        <PrismicRichText field={data.about} />
      </main>
    </LinearBackground>
  )
}
