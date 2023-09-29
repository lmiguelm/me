"use client";

import { motion, useScroll } from "framer-motion";
import { Button } from "../ui/button";

export function FloatActionProgress() {
  const { scrollYProgress } = useScroll();

  return (
    <Button
      variant="secondary"
      className="flex items-center justify-center p-2 w-9 h-9"
    >
      <svg className="w-4 h-8" viewBox="0 0 100 100">
        <circle
          cx="50"
          cy="50"
          r="30"
          pathLength="1"
          className="stroke-background"
          fill="none"
          strokeWidth={15}
        />

        <motion.circle
          cx="50"
          cy="50"
          r="30"
          pathLength="1"
          className="stroke-muted-foreground"
          style={{ pathLength: scrollYProgress }}
          fill="none"
          strokeWidth={15}
        />
      </svg>
    </Button>
  );
}
