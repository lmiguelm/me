import { socialMedia } from "@/utils/social-media";
import { Link } from "./link";
import { MediaSocialIconLink } from "./media-social-icon-link";

export function Footer() {
  return (
    <footer className="w-full h-80 bg-secondary flex flex-col items-center justify-center space-y-4">
      <div className="flex space-x-2">
        {Object.entries(socialMedia).map(([key, { icon, url }]) => (
          <MediaSocialIconLink
            key={key}
            url={url}
            icon={icon}
            variant="outline"
            iconClassName="w-6 h-6"
          />
        ))}
      </div>

      <div className="flex items-center max-sm:flex-col space-x-3 text-sm">
        <p>Portfólio de Luis Miguel © {new Date().getFullYear()}</p>

        <span className="max-sm:hidden">•</span>

        <p>
          Publicado com{" "}
          <Link
            title="Prismic"
            href="https://prismic.io/"
            target="_blank"
            rel="noopener noreferrer"
          />
        </p>
      </div>
    </footer>
  );
}
