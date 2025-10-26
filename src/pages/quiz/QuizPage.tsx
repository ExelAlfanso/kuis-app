import { useEffect, useState } from "react";
import { fetchTriviaQuestions } from "../../services/opentdb";
import { useNavigate } from "react-router";
import { useQuizProgress, QUIZPROGRESS_KEY } from "../../hooks/useQuizProgress";
import TopBar from "../../components/TopBar";
import QuizSectionBrutality from "../../sections/QuizSectionBrutality";
import { QuizForm } from "../../forms/QuizForm";
import Spiral from "../../assets/Spiral.svg";
import Sunflower from "../../assets/Sunflower.svg";
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
    <div className="flex flex-col items-center justify-center min-h-screen bg-primary ">
      <TopBar></TopBar>
      <img src={Spiral} alt="" className="absolute bottom-0 left-0" />
      <img src={Sunflower} alt="" className="absolute left-20 w-65" />
      <QuizForm
        quizProgress={quizProgress}
        quizStarted={quizStarted}
        setQuizStarted={setQuizStarted}
        handleStartQuiz={handleStartQuiz}
      ></QuizForm>
      <QuizSectionBrutality />
    </div>
  );
}
