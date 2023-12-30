import { createClient } from '@/prismicio'

import { LinearBackground } from '@/components/linear-background'
import { StackCard } from '@/components/stack-card'
import { Subtitle } from '@/components/subtitle'

export async function StacksSection() {
  const client = createClient()

  const { data } = await client.getSingle('home', {
    fetch: ['home.skills'],
  })

  return (
    <LinearBackground className="flex flex-col p-3 gap-6 rounded-xl">
      <Subtitle>Domínio técnico</Subtitle>

      <div className="grid grid-cols-8 max-sm:grid-cols-4 items-center gap-3">
        {data.skills.map(({ skill, url: link }) => (
          <StackCard key={skill.url} field={skill} url={link.url} />
        ))}
      </div>
    </LinearBackground>
  )
}
