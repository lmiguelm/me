import { LinearBackground } from '@/components/linear-background'
import { MediaSocialIconLink } from '@/components/media-social-icon-link'
import { createClient } from '@/prismicio'
import { socialMediaIcon } from '@/utils/social-media-icon'

export async function SocialMediaSection() {
  const client = createClient()
  const socialMedias = await client.getSingle('social_media')

  return (
    <LinearBackground className="flex rounded-lg p-3 gap-3">
      {Object.entries(socialMedias.data).map(([key, { url }]) => (
        <MediaSocialIconLink
          key={key}
          url={url}
          icon={socialMediaIcon[key as keyof typeof socialMediaIcon]}
          variant="outline"
        />
      ))}
    </LinearBackground>
  )
}
