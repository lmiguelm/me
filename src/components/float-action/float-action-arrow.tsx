"use client";

import { ArrowUp } from "lucide-react";
import { Button } from "../ui/button";

export function FloatActionArrow() {
  function handleClick() {
    return window.scrollTo({
      behavior: "smooth",
      top: 0,
    });
  }

  return (
    <Button
      variant="secondary"
      className="flex items-center justify-center p-2 w-9 h-9"
      onClick={handleClick}
    >
      <ArrowUp className="w-4 h-4" />
    </Button>
  );
}
