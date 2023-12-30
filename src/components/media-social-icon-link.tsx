import Link from 'next/link'
import { ComponentProps, ElementType } from 'react'

import { ButtonIcon } from './button-icon'

type Props = ComponentProps<typeof ButtonIcon> & {
  icon: ElementType
  url: string
}

export function MediaSocialIconLink({ icon: Icon, url, ...props }: Props) {
  return (
    <Link rel="noopener noreferrer" target="_blank" href={url}>
      <ButtonIcon icon={Icon} {...props} />
    </Link>
  )
}
