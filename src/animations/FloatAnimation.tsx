import { easeInOut } from "motion";
import type { TargetAndTransition, Variants } from "motion/react";

export const floatPopAnim: TargetAndTransition = {
  scale: [0, 1.1, 1],
  y: [0, -10, 0],
  transition: {
    scale: {
      duration: 0.6,
      ease: easeInOut,
    },
    y: {
      duration: 3,
      repeat: Infinity,
      ease: easeInOut,
    },
  },
};

export const floatPopVariants: Variants = {
  hidden: { scale: 0, opacity: 0, y: 0 },
  visible: {
    scale: [1.1, 1],
    y: [0, -10, 0],
    opacity: 1,
    transition: {
      scale: { duration: 0.6, ease: easeInOut },
      y: { duration: 3, repeat: Infinity, ease: easeInOut },
    },
  },
};

export default floatPopAnim;
