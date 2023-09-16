"use client";

import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@radix-ui/react-navigation-menu";

import Link from "next/link";

import { routesNames } from "@/utils/routes";

import { navigationMenuTriggerStyle } from "./ui/navigation-menu";

export function NavigationLinks() {
  return (
    <NavigationMenu className="max-sm:hidden">
      <NavigationMenuList className="flex gap-2">
        {routesNames.map((route) => (
          <NavigationMenuItem key={route}>
            <Link href="/" legacyBehavior passHref>
              <NavigationMenuLink
                className={navigationMenuTriggerStyle({
                  className:
                    "text-muted-foreground bg-transparent hover:bg-transparent",
                })}
              >
                {route}
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
        ))}
      </NavigationMenuList>
    </NavigationMenu>
  );
}
