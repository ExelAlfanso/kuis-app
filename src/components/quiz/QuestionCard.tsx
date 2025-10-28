import type { TriviaQuestion } from "../../models/TriviaQuestion";
import Choices from "./Choices";
import Timer from "../Timer";
import BaseCard from "../BaseCard";
import { AnimatePresence, motion } from "motion/react";

interface QuestionCardProps {
  currentQuestion: TriviaQuestion;
  onNext: (selectedAnswer: string) => void;
  onFinish: () => void;
  onTick: (time: number) => void;
  time: number;
}

const QuestionCard: React.FC<QuestionCardProps> = ({
  currentQuestion,
  onNext,
  time,
  onFinish,
  onTick,
}) => {
  return (
    <AnimatePresence>
      <BaseCard className="relative h-[55vh] w-full xl:w-[54vw] xl:pr-35 bg-white ">
        {time && (
          <Timer
            className="absolute -right-15 top-0"
            seconds={time}
            onFinish={onFinish}
            onTick={onTick}
          />
        )}
        <motion.div
          key={currentQuestion.id}
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          style={{ originX: 0 }}
          transition={{ duration: 0.5, ease: "easeOut", delay: 0.3 }}
        >
          <Choices onNext={onNext} triviaQuestion={currentQuestion} />
        </motion.div>
      </BaseCard>
    </AnimatePresence>
  );
};

export default QuestionCard;
