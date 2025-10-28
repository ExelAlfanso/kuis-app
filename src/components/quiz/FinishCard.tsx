import {
  CheckCircleIcon,
  QuestionIcon,
  XCircleIcon,
} from "@phosphor-icons/react";
import Chip from "../Chip";
import BaseCard from "../BaseCard";
import PrimaryButton from "../buttons/PrimaryButton";
import SecondaryButton from "../buttons/SecondaryButton";
import { motion } from "motion/react";

interface FinishCardProps {
  totalQuestions: number;
  correctAnswers: number;
  onRestart: () => void;
  onNewQuiz: () => void;
}

const FinishCard: React.FC<FinishCardProps> = ({
  totalQuestions,
  correctAnswers,
  onRestart,
  onNewQuiz,
}) => {
  return (
    <BaseCard className="flex flex-col items-center justify-center text-center rounded-xs h-[55vh] w-[70vw] xl:w-[30vw] gap-10 z-20">
      <h2 className="mb-2 text-3xl font-nunito font-semibold">
        Here are your results!
      </h2>

      <motion.div
        className="flex flex-row items-center justify-center gap-5 mb-5 text-black font-bold"
        initial="hidden"
        animate="visible"
        variants={{
          hidden: {},
          visible: {
            transition: {
              staggerChildren: 0.15,
            },
          },
        }}
      >
        {[
          {
            key: "Correct",
            icon: <CheckCircleIcon />,
            value: correctAnswers,
            class: "bg-accent-one",
          },
          {
            key: "Wrong",
            icon: <XCircleIcon />,
            value: totalQuestions - correctAnswers,
            class: "bg-accent-two",
          },
          {
            key: "Total",
            icon: <QuestionIcon />,
            value: totalQuestions,
            class: "bg-primary",
          },
        ].map((chip) => (
          <motion.div
            key={chip.key}
            variants={{
              hidden: { scale: 0, opacity: 0 },
              visible: {
                scale: [1.3, 1],
                opacity: 1,
                transition: {
                  type: "spring",
                  stiffness: 400,
                  damping: 15,
                  delay: 0.55,
                },
              },
            }}
          >
            <h3 className="text-left">{chip.key}</h3>
            <Chip className={chip.class}>
              {chip.icon}
              {chip.value}
            </Chip>
          </motion.div>
        ))}
      </motion.div>

      <div className="space-x-4">
        <PrimaryButton onClick={onRestart}>Try again?</PrimaryButton>
        <SecondaryButton onClick={onNewQuiz}>Start a new quiz</SecondaryButton>
      </div>
    </BaseCard>
  );
};

export default FinishCard;
