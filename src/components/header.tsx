import { Code2 } from "lucide-react";
import Link from "next/link";

import { Menu as MenuComponent } from "@/components/menu";

import { socialMedia } from "@/utils/social-media";
import { MediaSocialIconLink } from "./media-social-icon-link";
import { NavigationLinks } from "./navigation-links";
import { ToggleThemeButton } from "./toggle-theme-button";

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
          icon={socialMedia.GitHub.icon}
          url={socialMedia.GitHub.url}
        />

        <MediaSocialIconLink
          icon={socialMedia.LinkedIn.icon}
          url={socialMedia.LinkedIn.url}
        />

        <MediaSocialIconLink
          icon={socialMedia.Instagram.icon}
          url={socialMedia.Instagram.url}
        />

        <ToggleThemeButton />
      </div>
    </header>
  );
}
