import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import QuestionCard from "./QuestionCard";
import { useLoading } from "../../hooks/useLoading";
import { hashString } from "../../utils/hashString";
import { sessionKey } from "../../utils/sessionKey";
import Timer from "../../components/Timer";
export const QUIZPROGRESS_KEY = "quizProgress";

export default function QuestionsPage() {
  const location = useLocation();
  const { questions, username } = location.state || {};
  const [index, setIndex] = useState(0);
  const [correctAnswers, setCorrectAnswers] = useState(0);
  const [incorrectAnswers, setIncorrectAnswers] = useState(0);
  const [finished, setFinished] = useState(false);
  const { loading, Spinner } = useLoading();
  const currentQuestion = questions[index];

  // bakal ngesave state quiz saat dan setelah pertanyaan selanjutnya.
  useEffect(() => {
    localStorage.setItem(
      QUIZPROGRESS_KEY,
      JSON.stringify({
        username,
        index,
        questions,
      })
    );
  }, [index, questions]);

  // ngehandle saving timeLeft per tick
  const handleTick = (time: number) => {
    localStorage.setItem(
      QUIZPROGRESS_KEY,
      JSON.stringify({
        ...JSON.parse(localStorage.getItem(QUIZPROGRESS_KEY) || "{}"),
        timeLeft: time,
      })
    );
  };

  // ngehandle finish event
  const handleFinish = () => {
    return <></>;
  };

  // ngehandle nextQuestion event
  const handleNextQuestion = async (selected: string) => {
    const isCorrect = await checkAnswer(
      selected,
      questions[index].hashed_answer
    );
    if (index < questions.length - 1) {
      if (isCorrect) {
        setCorrectAnswers((prev) => prev + 1);
      } else {
        setIncorrectAnswers((prev) => prev + 1);
      }
      setIndex((prevIndex) => prevIndex + 1);
    } else {
      setFinished(true);
    }
  };

  if (finished) {
    return (
      <div>{`Finished! Correct Answers: ${correctAnswers}, Incorrect Answers: ${incorrectAnswers}`}</div>
    );
  }

  // ngecheck jawaban quiz dengan hash
  async function checkAnswer(selected: string, hashedAnswer: string) {
    const userHash = await hashString(selected + sessionKey);
    return userHash === hashedAnswer;
  }
  return (
    <>
      {loading && Spinner}
      <AnimatePresence>
        <Timer seconds={300} onFinish={handleFinish} onTick={handleTick} />
        <motion.div
          key={index}
          initial={{ opacity: 1, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -50 }}
          transition={{ duration: 0.2 }}
          className="min-h-screen bg-white flex flex-col items-center justify-center"
        >
          <h1 className="font-roboto font-semibold text-heading text-2xl mb-6">
            Question {index + 1}
          </h1>
          <QuestionCard
            currentQuestion={currentQuestion}
            onNext={handleNextQuestion}
          />
        </motion.div>
      </AnimatePresence>
    </>
  );
}
