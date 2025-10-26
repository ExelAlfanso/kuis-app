import {
  CheckCircleIcon,
  QuestionIcon,
  XCircleIcon,
} from "@phosphor-icons/react";
import Button from "../buttons/Button";
import Chip from "./Chip";

interface FinishCardProps {
  totalQuestions: number;
  correctAnswers: number;
  onRestart: () => void;
}

const FinishCard: React.FC<FinishCardProps> = ({
  totalQuestions,
  correctAnswers,
  onRestart,
}) => {
  return (
    <div className="p-4 border border-gray-300 rounded shadow-md text-center">
      <h2 className="text-lg font-semibold mb-2">Quiz Finished!</h2>

      <p className="text-gray-700 mb-4">Here are you results!</p>
      <div className="flex flex-row gap-2 items-center justify-center mb-5">
        <Chip className="bg-green-600 text-white">
          <CheckCircleIcon />
          {correctAnswers}
        </Chip>
        <Chip className="bg-red-600 text-white">
          <XCircleIcon />
          {totalQuestions - correctAnswers}
        </Chip>
        <Chip className="bg-black text-white">
          <QuestionIcon />
          {totalQuestions}
        </Chip>
      </div>
      <Button onClick={onRestart}>Restart Quiz</Button>
    </div>
  );
};

export default FinishCard;
