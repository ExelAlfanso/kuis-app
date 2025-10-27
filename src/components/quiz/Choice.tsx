interface ChoiceProps {
  choiceLabel: string;
  answer: string;
  onClick: () => void;
}

const Choice: React.FC<ChoiceProps> = ({ choiceLabel, answer, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="cursor-pointer hover:bg-gray-200 p-2 my-1 rounded-xs border-2 border-black font-nunito font-semibold h-20 flex items-center justify-start gap-4"
    >
      <p className="flex items-center justify-center bg-gray-500 h-10 w-10 rounded-xs">
        {choiceLabel.toUpperCase()}
      </p>
      <p className="inline">{answer}</p>
    </button>
  );
};

export default Choice;
