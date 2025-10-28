import { motion } from "motion/react";
import { quizDatas } from "../datas/quizDatas";
import BlackSpark from "../assets/BlackSpark.svg";
export default function TopBar() {
  return (
    <div className="absolute top-[1%] z-20 bg-secondary h-15 w-full overflow-hidden">
      <motion.div
        animate={{ x: ["0%", "-50%"] }}
        transition={{
          repeat: Infinity,
          duration: 10,
          ease: "linear",
        }}
        className="flex items-center justify-center text-5xl font-semibold text-black whitespace-nowrap"
      >
        {[...Array(2)].map((_, i) => (
          <div key={i} className="flex items-center ">
            {quizDatas.map((quiz, idx) => (
              <div
                key={quiz.id || idx}
                className="flex items-center justify-center mx-5"
              >
                <span>{quiz.name}</span>
                <img
                  src={BlackSpark}
                  alt="separator"
                  className="w-10 h-10 mx-5"
                />
              </div>
            ))}
          </div>
        ))}
      </motion.div>
    </div>
  );
}
