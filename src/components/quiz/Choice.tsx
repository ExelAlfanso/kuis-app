interface ChoiceProps {
  choiceLabel: string;
  answer: string;
  onClick: () => void;
}

const Choice: React.FC<ChoiceProps> = ({ choiceLabel, answer, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="cursor-pointer hover:bg-gray-200 p-2 my-1 rounded border border-gray-300"
    >
      {choiceLabel}. {answer}
    </button>
  );
};

export default Choice;
