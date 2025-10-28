import type { TriviaQuestion } from "../../models/TriviaQuestion";
import Choices from "./Choices";
import SparkTwo from "../../assets/SparkTwo.svg";
import Timer from "../Timer";
import BaseCard from "../BaseCard";

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
    <BaseCard className="relative h-[55vh] w-[54vw]  xl:pr-35 bg-white ">
      <div>
        <img
          src={SparkTwo}
          alt=""
          className="absolute w-25 -right-10 -top-10 xl:w-50 xl:-right-20 xl:-top-20"
        />
        {time && (
          <Timer
            className="absolute -right-15 top-0"
            seconds={time}
            onFinish={onFinish}
            onTick={onTick}
          />
        )}
      </div>

      <Choices onNext={onNext} triviaQuestion={currentQuestion} />
    </BaseCard>
  );
};

export default QuestionCard;
