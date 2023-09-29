"use client";

import { Share2 } from "lucide-react";
import { Button } from "../ui/button";

export function FloatActionShare() {
  async function handleClick() {
    await navigator.share({
      url: location.href,
      title: "lmiguelm",
      text: "Portfólio de Luis Miguel",
    });
  }

  return (
    <Button
      variant="secondary"
      className="flex items-center justify-center p-2 w-9 h-9"
      onClick={handleClick}
    >
      <Share2 className="w-4 h-4" />
    </Button>
  );
}
