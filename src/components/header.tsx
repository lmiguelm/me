import { Code2 } from "lucide-react";

import { Menu as MenuComponent } from "@/components/menu";

import { createClient } from "@/prismicio";
import { socialMediaIcon } from "@/utils/social-media-icon";
import Link from "next/link";
import { MediaSocialIconLink } from "./media-social-icon-link";
import { NavigationLinks } from "./navigation-links";
import { Title } from "./title";
import { ToggleThemeButton } from "./toggle-theme-button";

export async function Header() {
  const client = createClient();
  const socialMedias = await client.getSingle("social_media");

  return (
    <header className="w-full h-14 flex p items-center justify-around max-sm:justify-between max-sm:px-3 border-b bg-background">
      <div className="flex items-center justify-center">
        <div className="flex items-center justify-center gap-2 pr-4 sm:hover:scale-110 transition-all">
          <Code2 className="max-sm:hidden" />
          <MenuComponent />

          <Link href="/">
            <Title className="text-2xl">lmiguelm_</Title>
          </Link>
        </div>

        <NavigationLinks />
      </div>

      <div className="flex items-center justify-center space-x-1">
        {Object.entries(socialMedias.data).map(([key, { url }]: any) => (
          <MediaSocialIconLink
            key={key}
            icon={socialMediaIcon[key as keyof typeof socialMediaIcon]}
            url={url}
          />
        ))}

        <ToggleThemeButton />
      </div>
    </header>
  );
}
