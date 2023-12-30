import { ArrowLeft, ArrowRight } from 'lucide-react'

import { ButtonIcon } from '../button-icon'
import { ButtonProps } from '../ui/button'

type Props = ButtonProps & {
  side: 'left' | 'right'
}

export function PaginationAction({ side, ...props }: Props) {
  return (
    <ButtonIcon
      {...props}
      variant="outline"
      icon={side === 'left' ? ArrowLeft : ArrowRight}
    />
  )
}
