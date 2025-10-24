import { useLocation } from "react-router-dom";
import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import QuestionCard from "./QuestionCard";
import { useLoading } from "../../hooks/useLoading";

export default function QuestionsPage() {
  const location = useLocation();
  const { questions } = location.state || {};
  const [index, setIndex] = useState(0);
  const [correctAnswers, setCorrectAnswers] = useState(0);
  const [incorrectAnswers, setIncorrectAnswers] = useState(0);
  const [finished, setFinished] = useState(false);
  const { setLoading, loading, Spinner } = useLoading();
  const currentQuestion = questions[index];

  const handleNextQuestion = (selected: string) => {
    const isCorrect = selected === currentQuestion.correct_answer;
    // Logic for handling the next question can be added here
    if (index < questions.length - 1) {
      if (isCorrect) {
        setCorrectAnswers((prev) => prev + 1);
      } else {
        setIncorrectAnswers((prev) => prev + 1);
      }
      setIndex((prevIndex) => prevIndex + 1);
    } else {
      setLoading(true);
      setTimeout(() => {
        setLoading(false);
        setFinished(true);
      }, 1000);
    }
  };

  if (finished) {
    return (
      <div>{`Finished! Correct Answers: ${correctAnswers}, Incorrect Answers: ${incorrectAnswers}`}</div>
    );
  }
  return (
    <>
      {loading && Spinner}
      <AnimatePresence>
        <motion.div
          key={index}
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -50 }}
          transition={{ duration: 0.3 }}
          className="min-h-screen bg-white flex flex-col items-center justify-center"
        >
          <QuestionCard
            currentQuestion={currentQuestion}
            onNext={handleNextQuestion}
          />
        </motion.div>
      </AnimatePresence>
    </>
  );
}
