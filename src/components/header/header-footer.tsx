import { createClient } from '@/prismicio'

import { socialMediaIcon } from '@/utils/social-media-icon'
import { MediaSocialIconLink } from '../media-social-icon-link'
import { ToggleThemeButton } from '../toggle-theme-button'

export async function HeaderFooter() {
  const client = createClient()
  const socialMedias = await client.getSingle('social_media')

  return (
    <div className="flex items-center justify-center space-x-1">
      {Object.entries(socialMedias.data).map(([key, { url }]) => (
        <MediaSocialIconLink
          key={key}
          icon={socialMediaIcon[key as keyof typeof socialMediaIcon]}
          url={url}
        />
      ))}

      <ToggleThemeButton />
    </div>
  )
}
