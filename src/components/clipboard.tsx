"use client";

import { CheckCircle2, Copy } from "lucide-react";
import { useState } from "react";

import { twMerge } from "tailwind-merge";
import { Button } from "./ui/button";

type Props = {
  textToBeCopied: string;
  position?: "left" | "right";
};

export function Clipboard({ textToBeCopied, position = "left" }: Props) {
  const [hasCopied, setHasCopied] = useState<boolean>(false);

  function handleCopy() {
    navigator.clipboard.writeText(textToBeCopied);
    setHasCopied(true);
  }

  return (
    <Button
      variant="link"
      onClick={handleCopy}
      className={twMerge(
        "flex items-center gap-3 cursor-pointer p-0",
        position === "right" ? "flex-row-reverse" : "flex-row"
      )}
    >
      {hasCopied ? (
        <CheckCircle2 className="h-4 w-4 text-green-500 max-sm:hidden" />
      ) : (
        <Copy className="h-4 w-4 text-muted-foreground max-sm:hidden" />
      )}

      <span className="text-muted-foreground">{textToBeCopied}</span>
    </Button>
  );
}
