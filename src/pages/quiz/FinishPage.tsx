import FinishCard from "../../components/quiz/FinishCard";
interface FinishPageProps {
  totalQuestions: number;
  correctAnswers: number;
  onRestart: () => void;
}
export default function FinishPage({
  totalQuestions,
  correctAnswers,
  onRestart,
}: FinishPageProps) {
  return (
    <div className="flex items-center justify-center">
      <FinishCard
        totalQuestions={totalQuestions}
        correctAnswers={correctAnswers}
        onRestart={onRestart}
      ></FinishCard>
    </div>
  );
}
