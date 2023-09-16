"use client";

import { ubuntu_700 } from "@/app/fonts";
import { Code2 } from "lucide-react";
import { Typewriter } from "react-simple-typewriter";
import { twMerge } from "tailwind-merge";

export function Logo() {
  return (
    <div className="flex items-center gap-2">
      <Code2 className="text-highlight" />

      <span
        className={twMerge(ubuntu_700.className, "text-3xl max-sm:text-lg")}
      >
        <Typewriter words={["lmiguelm_", "lm technology"]} loop cursor />
      </span>
    </div>
  );
}
