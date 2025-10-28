import type { Variants } from "motion/react";

export const scalePop: Variants = {
  hidden: { scale: 0, opacity: 0 },
  visible: {
    scale: [1.3, 1],
    opacity: 1,
    transition: { type: "spring", stiffness: 400, damping: 15 },
  },
};

export const staggerContainer: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

export const slideUpFade: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: [0.45, 0, 0.55, 1] },
  },
};
