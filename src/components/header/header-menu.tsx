import { Code2 } from 'lucide-react'
import Link from 'next/link'

import { Menu as MenuComponent } from '@/components/menu'
import { NavigationLinks } from '@/components/navigation-links'
import { Title } from '@/components/title'

export function HeaderContent() {
  return (
    <div className="flex items-center justify-center">
      <div className="flex items-center justify-center gap-2 pr-4 sm:hover:scale-110 transition-all">
        <Code2 className="max-sm:hidden" />
        <MenuComponent />

        <Link href="/">
          <Title className="text-2xl">lmiguelm_</Title>
        </Link>
      </div>

      <NavigationLinks />
    </div>
  )
}
