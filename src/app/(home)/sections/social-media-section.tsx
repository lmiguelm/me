import { LinearBackground } from "@/components/linear-background";
import { MediaSocialIconLink } from "@/components/media-social-icon-link";

import { socialMedia } from "@/utils/social-media";

export function SocialMediaSection() {
  return (
    <LinearBackground className="flex rounded-lg p-3 gap-3">
      {Object.entries(socialMedia).map(([key, { icon, url }]) => (
        <MediaSocialIconLink
          key={key}
          url={url}
          icon={icon}
          variant="outline"
        />
      ))}
    </LinearBackground>
  );
}
