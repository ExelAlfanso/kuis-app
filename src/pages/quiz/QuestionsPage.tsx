import { useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";
import QuestionCard from "../../components/quiz/QuestionCard";
import { hashString } from "../../utils/hashString";
import { sessionKey } from "../../utils/sessionKey";
import { QUIZPROGRESS_KEY, useQuizProgress } from "../../hooks/useQuizProgress";
import FinishPage from "./FinishPage";

export default function QuestionsPage() {
  const location = useLocation();
  const navigate = useNavigate();
  const { deleteQuizProgress } = useQuizProgress();
  const { quizProgress, questions, username } = location.state || {};
  const [finished, setFinished] = useState(false);
  const [index, setIndex] = useState(quizProgress?.index || 0);
  const [correctAnswers, setCorrectAnswers] = useState(
    quizProgress?.correctAnswers || 0
  );
  const restartKey = location.state?.restartKey ?? "default";
  const [timeLeft] = useState(quizProgress?.timeLeft || 300);

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
    deleteQuizProgress();
    setFinished(true);
  };
  const handleRestart = () => {
    deleteQuizProgress();
    setIndex(0);
    setCorrectAnswers(0);
    setFinished(false);
  };

  const handleNewQuiz = () => {
    deleteQuizProgress();
    navigate("/quiz");
  };

  if (finished) {
    return (
      <FinishPage
        totalQuestions={questions.length}
        correctAnswers={correctAnswers}
        onRestart={handleRestart}
        onNewQuiz={handleNewQuiz}
      ></FinishPage>
    );
  }
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
  // ngecheck jawaban quiz dengan hash
  async function checkAnswer(selected: string, hashedAnswer: string) {
    const userHash = await hashString(selected + sessionKey);
    return userHash === hashedAnswer;
  }
  return (
    <div
      key={restartKey}
      className="flex flex-col items-center xl:items-start pt-50 px-15"
    >
      <div className="z-20">
        <div className="text-2xl xl:text-5xl font-bold font-nunito text-accent-one">
          Category: {currentQuestion.category}
        </div>
        <div className="text-xl xl:text-3xl font-nunito">
          {currentQuestion.question}
        </div>
      </div>
      <QuestionCard
        currentQuestion={currentQuestion}
        onNext={handleNextQuestion}
        time={timeLeft}
        onFinish={handleFinish}
        onTick={(t) => {
          handleTick(t);
        }}
      />
    </div>
  );
}
