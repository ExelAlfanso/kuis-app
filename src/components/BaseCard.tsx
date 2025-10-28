import { AnimatePresence, motion } from "motion/react";
import { scalePop } from "../animations/variants";
import SparkTwo from "../assets/SparkTwo.svg";

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
        className={`relative p-10  bg-white shadow-black shadow-[5px_5px_1px_rgba(0,0,0,0.5)] ${className}`}
      >
        <img
          src={SparkTwo}
          alt=""
          className="absolute -right-10 -top-10 w-25 xl:w-50 xl:-right-20 xl:-top-20"
        />
        {children}
      </motion.div>
    </AnimatePresence>
  );
};

export default BaseCard;
