import {
  CheckCircleIcon,
  QuestionIcon,
  XCircleIcon,
} from "@phosphor-icons/react";
import Chip from "../Chip";
import BaseCard from "../BaseCard";
import PrimaryButton from "../buttons/PrimaryButton";
import SecondaryButton from "../buttons/SecondaryButton";

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
    <BaseCard className="flex flex-col items-center justify-center text-center rounded-xs h-[55vh] w-[40vw] gap-10">
      <h2 className="mb-2 text-3xl font-nunito font-semibold">
        Here are your results!
      </h2>
      <div className="flex flex-row items-center justify-center gap-5 mb-5 text-black font-bold">
        <Chip className="bg-accent-one ">
          <CheckCircleIcon />
          {correctAnswers}
        </Chip>
        <Chip className="bg-accent-two">
          <XCircleIcon />
          {totalQuestions - correctAnswers}
        </Chip>
        <Chip className="bg-primary">
          <QuestionIcon />
          {totalQuestions}
        </Chip>
      </div>
      <div className="space-x-4">
        <PrimaryButton onClick={onRestart}>Try again?</PrimaryButton>
        <SecondaryButton onClick={onNewQuiz}>Start a new quiz</SecondaryButton>
      </div>
    </BaseCard>
  );
};

export default FinishCard;
