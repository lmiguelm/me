import { createClient } from '@/prismicio'
import { socialMediaIcon } from '@/utils/social-media-icon'
import { Link } from './link'
import { MediaSocialIconLink } from './media-social-icon-link'

export async function Footer() {
  const client = createClient()
  const socialMedias = await client.getSingle('social_media')

  return (
    <footer className="w-full h-80 bg-secondary flex flex-col items-center justify-center space-y-4">
      <div className="flex space-x-2">
        {Object.entries(socialMedias.data).map(([key, { url }]) => (
          <MediaSocialIconLink
            key={key}
            url={url}
            icon={socialMediaIcon[key as keyof typeof socialMediaIcon]}
            variant="outline"
            iconclassname="w-6 h-6"
          />
        ))}
      </div>

      <div className="flex items-center max-sm:flex-col space-x-3 text-sm">
        <p>Portfólio de Luis Miguel © {new Date().getFullYear()}</p>

        <span className="max-sm:hidden">•</span>

        <p>
          Publicado com{' '}
          <Link
            title="Prismic"
            href="https://prismic.io/"
            target="_blank"
            rel="noopener noreferrer"
          />
        </p>
      </div>
    </footer>
  )
}
