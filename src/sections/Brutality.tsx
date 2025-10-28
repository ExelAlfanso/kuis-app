import { motion } from "motion/react";
import BrutalityArrow from "../assets/BrutalistArrow.svg";
import BaseBrutality from "./BaseBrutality";

const Brutality = () => {
  return (
    <BaseBrutality>
      <motion.img
        className="hidden 2xl:block absolute top-[40%] left-[40%]"
        src={BrutalityArrow}
        alt=""
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      />
    </BaseBrutality>
  );
};

export default Brutality;
