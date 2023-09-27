"use client";

import { motion, MotionProps } from "framer-motion";
import { forwardRef } from "react";

type Props = MotionProps & {
  className?: string;
};

export const MotionDiv = forwardRef<HTMLDivElement, Props>((props, ref) => {
  return (
    <motion.div
      ref={ref}
      initial={{
        opacity: 0.75,
        scale: 0.9,
        translateY: 20,
        rotateX: 10,
      }}
      animate={{
        opacity: 1,
        scale: 1,
        translateY: 0,
        rotateX: 0,
      }}
      transition={{
        type: "spring",
      }}
      {...props}
    >
      {props.children}
    </motion.div>
  );
});
