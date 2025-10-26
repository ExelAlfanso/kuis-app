import type { TriviaQuestion } from "../../models/TriviaQuestion";
import BooleanQuestion from "./BooleanQuestion";
import MultipleChoice from "./MultipleChoice";

interface QuestionCardProps {
  currentQuestion: TriviaQuestion;
  onNext: (selectedAnswer: string) => void;
}

const QuestionCard: React.FC<QuestionCardProps> = ({
  currentQuestion,
  onNext,
}) => {
  return (
    <div>
      {currentQuestion.type === "multiple" && (
        <MultipleChoice onNext={onNext} triviaQuestion={currentQuestion} />
      )}
      {currentQuestion.type === "boolean" && (
        <BooleanQuestion onNext={onNext} triviaQuestion={currentQuestion} />
      )}
    </div>
  );
};

export default QuestionCard;
