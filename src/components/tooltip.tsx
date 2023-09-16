"use client";

import React from "react";

import {
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
  Tooltip as TooltipUI,
} from "./ui/tooltip";

type Props = {
  children: React.ReactNode;
  message: string;
};

export function Tooltip(props: Props) {
  return (
    <TooltipProvider>
      <TooltipUI>
        <TooltipTrigger>{props.children}</TooltipTrigger>

        <TooltipContent className="bg-highlight">
          <span className="text-muted-foreground">{props.message}</span>
        </TooltipContent>
      </TooltipUI>
    </TooltipProvider>
  );
}
