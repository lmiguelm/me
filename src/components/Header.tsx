import { Code2 } from "lucide-react";
import Link from "next/link";

import { Menu as MenuComponent } from "@/components/Menu";

import { socialMedia } from "@/utils/social-media";
import { MediaSocialIconLink } from "./MediaSocialIconLink";
import { NavigationLinks } from "./NavigationLinks";
import { ToggleThemeButton } from "./ToggleThemeButton";

export function Header() {
  return (
    <header className="w-full h-14 flex p items-center justify-around max-sm:justify-between max-sm:px-3 border-b">
      <div className="flex items-center justify-center">
        <Link
          href="#"
          className="flex items-center justify-center gap-2 pr-4 sm:hover:scale-110 transition-all"
        >
          <Code2 className="max-sm:hidden" />
          <MenuComponent />

          <span className="text-2xl">lmiguelm_</span>
        </Link>

        <NavigationLinks />
      </div>

      <div className="flex items-center justify-center space-x-1">
        <MediaSocialIconLink
          icon={socialMedia.github.icon}
          url={socialMedia.github.url}
        />

        <MediaSocialIconLink
          icon={socialMedia.linkedin.icon}
          url={socialMedia.linkedin.url}
        />

        <MediaSocialIconLink
          icon={socialMedia.instagram.icon}
          url={socialMedia.instagram.url}
        />

        <ToggleThemeButton />
      </div>
    </header>
  );
}
