import { useEffect, useState } from "react";
import { fetchTriviaQuestions } from "../../services/opentdb";
import { useNavigate } from "react-router";
import { useQuizProgress, QUIZPROGRESS_KEY } from "../../hooks/useQuizProgress";
import { QuizForm } from "../../forms/QuizForm";
export default function QuizPage() {
  const [quizStarted, setQuizStarted] = useState({
    amount: 10,
    category: "",
    difficulty: "",
  });

  useEffect(() => {
    console.log("Quiz started updated:", quizStarted);
  }, [quizStarted]);
  const navigate = useNavigate();
  const { quizProgress } = useQuizProgress();
  // ngehandle mulainya quiz yakni retrive TriviaQuestion[] dari service fetchTriviaQuestions
  const handleStartQuiz = async () => {
    // setLoading(true);
    try {
      const res = await fetchTriviaQuestions(
        quizStarted.amount,
        quizStarted.category,
        quizStarted.difficulty
      );
      localStorage.removeItem(QUIZPROGRESS_KEY);
      navigate("/quiz/questions", {
        state: {
          quizProgress: null,
          questions: res,
          username: localStorage.getItem("username"),
        },
      });
      console.log(res);
    } catch (err) {
      console.log(err);
    } finally {
      // setLoading(false);
    }
  };
  return (
    <div className="flex items-center justify-center w-full pt-60 xl:pt-45">
      <QuizForm
        quizProgress={quizProgress}
        quizStarted={quizStarted}
        setQuizStarted={setQuizStarted}
        handleStartQuiz={handleStartQuiz}
      ></QuizForm>
    </div>
  );
}
