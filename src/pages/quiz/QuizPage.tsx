import { useState } from "react";
import Button from "../../components/Button";
import CategoryInputDropdown from "../../components/CategoryInputDropdown";
import InputDropdown from "../../components/InputDropdown";
import QuestionsInputDropdown from "../../components/QuestionsInputDropdown";
import { useLoading } from "../../hooks/useLoading";
import { fetchTriviaQuestions } from "../../services/opentdb";
import { useNavigate } from "react-router";
import { QUIZPROGRESS_KEY } from "./QuestionsPage";

export default function QuizPage() {
  const [quizStarted, setQuizStarted] = useState({
    amount: 10,
    category: "",
    difficulty: "",
  });
  const navigate = useNavigate();
  const { setLoading, loading, Spinner } = useLoading();

  // ngehandle mulainya quiz yakni retrive TriviaQuestion[] dari service fetchTriviaQuestions
  const handleStartQuiz = async () => {
    setLoading(true);
    try {
      const res = await fetchTriviaQuestions(
        quizStarted.amount,
        quizStarted.category,
        quizStarted.difficulty
      );
      localStorage.removeItem(QUIZPROGRESS_KEY);
      navigate("/quiz/questions", {
        state: { questions: res, username: localStorage.getItem("username") },
      });
      console.log(res);
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };
  return (
    <div className="min-h-screen bg-white flex flex-col items-center justify-center">
      {loading ? (
        Spinner
      ) : (
        <>
          <h1 className="text-heading text-3xl font-semibold">
            Hello {localStorage.getItem("username")}!
          </h1>
          <h2 className="text-heading text-2xl font-semibold">
            Choose your interest!
          </h2>
          <p className="text-primary mb-5">
            Select a category and difficulty level to start the quiz.
          </p>
          <div className="w-1/3 flex flex-col items-center justify-center gap-5">
            <QuestionsInputDropdown
              label={"Number of Questions"}
              initialValue={quizStarted.amount.toString() + " questions"}
              onChange={(e) => {
                setQuizStarted({
                  ...quizStarted,
                  amount: parseInt(e.currentTarget.innerText, 10),
                });
              }}
            ></QuestionsInputDropdown>
            <CategoryInputDropdown
              onChange={(e) => {
                setQuizStarted({
                  ...quizStarted,
                  category: e.currentTarget.innerText,
                });
              }}
            ></CategoryInputDropdown>
            <InputDropdown
              values={["Easy", "Medium", "Hard"]}
              label="Difficulty (optional)"
              onChange={(e) => {
                setQuizStarted({
                  ...quizStarted,
                  difficulty: e.currentTarget.innerText,
                });
              }}
            ></InputDropdown>
            <Button
              type="submit"
              onClick={() => {
                handleStartQuiz();
              }}
            >
              Start Quiz
            </Button>
          </div>
        </>
      )}
    </div>
  );
}
