import type { TriviaQuestion } from "../../models/TriviaQuestion";
import Choice from "./Choice";
interface MultipleChoiceProps {
  triviaQuestion: TriviaQuestion;
  onNext: (selectedAnswer: string) => void;
}

const Choices: React.FC<MultipleChoiceProps> = ({ triviaQuestion, onNext }) => {
  const multipleChoiceLabel = ["a", "b", "c", "d"];
  const booleanChoiceLabel = ["a", "b"];
  return (
    <div className="bg-white border-2 border-black p-10 h-[55vh] pr-35">
      <ul className="flex flex-col mt-4">
        {triviaQuestion.answers.map((answer: string, index: number) => (
          <Choice
            key={index}
            choiceLabel={
              triviaQuestion.type === "multiple"
                ? multipleChoiceLabel[index]
                : booleanChoiceLabel[index]
            }
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

export default Choices;
