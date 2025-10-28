import { AnimatePresence, motion } from "motion/react";
import { scalePop } from "../animations/variants";

interface BaseCardProps {
  children: React.ReactNode;
  className?: string;
}

const BaseCard: React.FC<BaseCardProps> = ({ children, className }) => {
  return (
    <AnimatePresence>
      <motion.div
        variants={scalePop}
        initial="hidden"
        animate="visible"
        className={`p-10  bg-white shadow-black shadow-[5px_5px_1px_rgba(0,0,0,0.5)] ${className}`}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
};

export default BaseCard;
