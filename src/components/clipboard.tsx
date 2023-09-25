"use client";

import { CheckCircle2, Copy } from "lucide-react";
import React, { useState } from "react";

import { delay } from "@/utils/delay";
import { twMerge } from "tailwind-merge";
import { Button } from "./ui/button";

type Props = {
  children?: React.ReactNode;
  textToBeCopied: string;
  position?: "left" | "right";
};

export function Clipboard({
  textToBeCopied,
  position = "left",
  children,
}: Props) {
  const [hasCopied, setHasCopied] = useState<boolean>(false);

  async function handleCopy() {
    navigator.clipboard.writeText(textToBeCopied);
    setHasCopied(true);
    await delay(3000);
    setHasCopied(false);
  }

  return (
    <Button
      variant="outline"
      onClick={handleCopy}
      className={twMerge(
        "flex items-center gap-3 cursor-pointer p-2",
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

      {children}
    </Button>
  );
}
