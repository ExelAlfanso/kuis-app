import FinishCard from "../../components/quiz/FinishCard";
interface FinishPageProps {
  totalQuestions: number;
  correctAnswers: number;
  onRestart: () => void;
  onNewQuiz: () => void;
}
export default function FinishPage({
  totalQuestions,
  correctAnswers,
  onRestart,
  onNewQuiz,
}: FinishPageProps) {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <FinishCard
        totalQuestions={totalQuestions}
        correctAnswers={correctAnswers}
        onRestart={onRestart}
        onNewQuiz={onNewQuiz}
      ></FinishCard>
    </div>
  );
}
