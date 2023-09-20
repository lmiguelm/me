import { Code2, Menu as MenuIcon } from "lucide-react";
import Link from "next/link";
import { Fragment } from "react";

import { ButtonIcon } from "./button-icon";

import { routesNames } from "@/utils/routes";
import { Separator } from "./ui/separator";

import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "./ui/sheet";

export function Menu() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <ButtonIcon variant="ghost" icon={MenuIcon} className="sm:hidden p-2" />
      </SheetTrigger>

      <SheetContent side="left">
        <SheetHeader>
          <SheetTitle className="flex items-center gap-2">
            <Code2 />
            <span className="text-lg">lmiguelm_</span>
          </SheetTitle>
        </SheetHeader>

        <div>
          {routesNames.map(({ name, path }) => (
            <Fragment key={path}>
              <Link href={path}>
                <div className="w-full py-3 mt-3">
                  <span className="text-sm">{name}</span>
                </div>
              </Link>

              <Separator />
            </Fragment>
          ))}
        </div>
      </SheetContent>
    </Sheet>
  );
}
