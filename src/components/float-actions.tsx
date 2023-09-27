"use client";

import { motion, useMotionValueEvent, useScroll } from "framer-motion";
import { useRouter } from "next/navigation";

import { ArrowLeft } from "lucide-react";

import { useState } from "react";
import { Button } from "./ui/button";

type Props = {
  children: React.ReactNode;
};

export function FloatActions({ children }: Props) {
  const { scrollYProgress } = useScroll();
  const router = useRouter();

  const [hasScroll, setHasScroll] = useState<boolean>(false);

  useMotionValueEvent(scrollYProgress, "change", (value) => {
    setHasScroll(value !== 0 && value !== 1);
  });

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
    <div className="flex flex-col fixed top-[150px] right-[15%] space-y-6 max-lg:hidden">
      <Button
        variant="secondary"
        className="flex items-center justify-center p-2 w-9 h-9"
        onClick={handleClick}
      >
        <motion.div animate={{ rotate: hasScroll ? 90 : 0 }}>
          <ArrowLeft className="w-4 h-4" />
        </motion.div>
      </Button>

      <Button
        variant="outline"
        className="flex items-center justify-center p-2 w-9 h-9"
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

      {children}

      {/* <Link href="/projects/tag/mobile" title="Mobile" />

      <Link href="/projects/tag/front-end" title="Front-end" />

      <Link href="/projects/tag/back-end" title="Back-end" /> */}
    </div>
  );
}
