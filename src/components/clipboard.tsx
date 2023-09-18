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

  async function handleCopy() {
    navigator.clipboard.writeText(textToBeCopied);
    setHasCopied(true);
    await delay();
    setHasCopied(false);
  }

  function delay() {
    const delay = 3000; // 3 seconds
    return new Promise((resolve) => setTimeout(resolve, delay));
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
        <CheckCircle2 className="flex-1 h-4 w-4 text-green-500" />
      ) : (
        <Copy className="flex-1 h-4 w-4 text-muted-foreground" />
      )}

      <div className="flex-1 max-sm:w-10/12">
        <p className="text-muted-foreground text-ellipsis overflow-hidden ...">
          {textToBeCopied}
        </p>
      </div>
    </Button>
  );
}
