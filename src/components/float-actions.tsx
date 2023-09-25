"use client";

import { motion, useMotionValueEvent, useScroll } from "framer-motion";
import { useRouter } from "next/navigation";

import { ArrowUp } from "lucide-react";

import { useState } from "react";
import { Button } from "./ui/button";

export function FloatActions() {
  const { scrollYProgress } = useScroll();
  const router = useRouter();

  const [hasScroll, setHasScroll] = useState<number>(0);

  useMotionValueEvent(scrollYProgress, "change", (value) =>
    setHasScroll(value)
  );
  function handleClick() {
    if (window.scrollY === 0) {
      return router.back();
    }

    return window.scrollTo({
      behavior: "smooth",
      top: 0,
    });
  }

  return (
    <div className="fixed top-[150px] right-[15%] space-y-6 max-lg:hidden">
      <Button
        variant="secondary"
        className="flex items-center justify-center p-2"
        onClick={handleClick}
      >
        <motion.div animate={{ rotate: hasScroll ? 0 : -90 }}>
          <ArrowUp className="w-4 h-4" />
        </motion.div>
      </Button>

      <Button
        variant="outline"
        className="flex items-center justify-center p-2"
        disabled
      >
        <svg className="w-4 h-8" viewBox="0 0 100 100">
          <circle
            cx="50"
            cy="50"
            r="30"
            pathLength="1"
            className="stroke-primary/50"
            fill="none"
            strokeWidth={15}
          />

          <motion.circle
            cx="50"
            cy="50"
            r="30"
            pathLength="1"
            className="stroke-primary"
            style={{ pathLength: scrollYProgress }}
            fill="none"
            strokeWidth={15}
          />
        </svg>
      </Button>
    </div>
  );
}
