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
      <p className="text-gray-700 mb-4">
        You answered {correctAnswers} out of {totalQuestions} questions
        correctly.
      </p>
      <button
        onClick={onRestart}
        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
      >
        Restart Quiz
      </button>
    </div>
  );
};

export default FinishCard;
