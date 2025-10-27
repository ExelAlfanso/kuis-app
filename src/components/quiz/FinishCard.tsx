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
    <div className="flex flex-col items-center justify-center p-4 text-center bg-white border border-gray-300 rounded shadow-md ">
      <h2 className="mb-2 text-lg font-semibold">Quiz Finished!</h2>

      <p className="mb-4 text-gray-700">Here are you results!</p>
      <div className="flex flex-row items-center justify-center gap-2 mb-5">
        <Chip className="text-white bg-green-600">
          <CheckCircleIcon />
          {correctAnswers}
        </Chip>
        <Chip className="text-white bg-red-600">
          <XCircleIcon />
          {totalQuestions - correctAnswers}
        </Chip>
        <Chip className="text-white bg-black">
          <QuestionIcon />
          {totalQuestions}
        </Chip>
      </div>
      <Button onClick={onRestart}>Restart Quiz</Button>
    </div>
  );
};

export default FinishCard;
