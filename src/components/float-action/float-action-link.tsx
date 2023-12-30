import { ComponentProps } from 'react'
import { Link } from '../link'

type Props = ComponentProps<typeof Link>

export function FloatActionLink(props: Props) {
  return <Link {...props} />
}
