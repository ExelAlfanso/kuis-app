import type { TriviaQuestion } from "../../services/opentdb";
import Choice from "./Choice";

interface MultipleChoiceProps {
  triviaQuestion: TriviaQuestion;
  onNext: (selectedAnswer: string) => void;
}

const MultipleChoice: React.FC<MultipleChoiceProps> = ({
  triviaQuestion,
  onNext,
}) => {
  const choiceLabel = ["a", "b", "c", "d"];
  return (
    <div>
      <h2>{triviaQuestion.question}</h2>
      <ul className="flex flex-col mt-4">
        {triviaQuestion.answers.map((answer: string, index: number) => (
          <Choice
            key={index}
            choiceLabel={choiceLabel[index]}
            answer={answer}
            onClick={() => {
              onNext(answer);
            }}
          />
        ))}
      </ul>
    </div>
  );
};

export default MultipleChoice;
