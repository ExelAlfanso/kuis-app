import { useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import QuestionCard from "../../components/quiz/QuestionCard";
import { useLoading } from "../../hooks/useLoading";
import { hashString } from "../../utils/hashString";
import { sessionKey } from "../../utils/sessionKey";
import Timer from "../../components/Timer";
import FinishCard from "../../components/quiz/FinishCard";
import { QUIZPROGRESS_KEY, useQuizProgress } from "../../hooks/useQuizProgress";

export default function QuestionsPage() {
  const location = useLocation();
  const navigate = useNavigate();
  const { deleteQuizProgress } = useQuizProgress();
  const { quizProgress, questions, username } = location.state || {};

  const [index, setIndex] = useState(quizProgress?.index || 0);
  const [correctAnswers, setCorrectAnswers] = useState(
    quizProgress?.correctAnswers || 0
  );
  const [finished, setFinished] = useState(quizProgress?.finished || false);
  const [initialTimeLeft] = useState(quizProgress?.timeLeft || 300);
  const { loading, Spinner } = useLoading();

  const currentQuestion = questions[index];

  // ngehandle saving timeLeft per tick
  const handleTick = (time: number) => {
    localStorage.setItem(
      QUIZPROGRESS_KEY,
      JSON.stringify({
        username,
        index,
        questions,
        timeLeft: time,
      })
    );
  };

  // ngehandle finish event
  const handleFinish = () => {
    setFinished(true);
    deleteQuizProgress();
  };
  const handleRestart = () => {
    // deleteQuizProgress();
    setIndex(0);
    setCorrectAnswers(0);
    setFinished(false);
    navigate("/quiz/questions", {
      state: { quizProgress, questions, username },
    });
  };
  // ngehandle nextQuestion event
  const handleNextQuestion = async (selected: string) => {
    const isCorrect = await checkAnswer(
      selected,
      questions[index].hashed_answer
    );
    if (index < questions.length - 1) {
      if (isCorrect) {
        setCorrectAnswers((prev: number) => prev + 1);
      }
      setIndex((prevIndex: number) => prevIndex + 1);
    } else {
      handleFinish();
    }
  };

  if (finished) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <FinishCard
          totalQuestions={questions.length}
          correctAnswers={correctAnswers}
          onRestart={handleRestart}
        ></FinishCard>
      </div>
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
        <Timer
          seconds={initialTimeLeft}
          onFinish={handleFinish}
          onTick={handleTick}
        />
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
