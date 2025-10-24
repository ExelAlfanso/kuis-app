import type { TriviaQuestion } from "../../services/opentdb";
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
      <h1>Questions</h1>
      {currentQuestion.type === "multiple" && (
        <MultipleChoice onNext={onNext} triviaQuestion={currentQuestion} />
      )}
    </div>
  );
};

export default QuestionCard;
