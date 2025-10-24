import type { TriviaQuestion } from "../../services/opentdb";

interface BooleanProps {
  question: TriviaQuestion;
}
const Boolean: React.FC<BooleanProps> = ({ question }) => {
  return (
    <div>
      <h2>{question.question}</h2>
      <ul>
        <li>True</li>
        <li>False</li>
      </ul>
    </div>
  );
};

export default Boolean;
