import { LinearBackground } from '@/components/linear-background'
import { Logo } from '@/components/logo'
import { ToggleThemeButton } from '@/components/toggle-theme-button'

export function LogoSection() {
  return (
    <LinearBackground className="flex justify-between rounded-lg p-4">
      <Logo />
      <ToggleThemeButton variant="secondary" />
    </LinearBackground>
  )
}
