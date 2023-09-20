"use client";

import { motion, MotionProps } from "framer-motion";

export function MotionDiv(props: MotionProps) {
  return (
    <motion.div
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
}
