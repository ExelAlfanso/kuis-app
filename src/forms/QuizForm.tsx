import { AnimatePresence, motion } from "motion/react";
import React from "react";
import SparkTwo from "../assets/SparkTwo.svg";
import QuestionsInputDropdown from "../components/quiz/QuestionsInputDropdown";
import CategoryInputDropdown from "../components/CategoryInputDropdown";
import InputDropdown from "../components/InputDropdown";
import { useNavigate } from "react-router-dom";
import type { QuizProgressState } from "../hooks/useQuizProgress";
import PrimaryButton from "../components/buttons/PrimaryButton";
import BaseCard from "../components/BaseCard";
interface QuizFormProps {
  //   onSubmit: () => void;
  quizProgress: QuizProgressState | null;
  quizStarted: {
    amount: number;
    category: string;
    difficulty: string;
  };
  setQuizStarted: React.Dispatch<
    React.SetStateAction<{
      amount: number;
      category: string;
      difficulty: string;
    }>
  >;
  handleStartQuiz: () => void;
}
export const QuizForm: React.FC<QuizFormProps> = ({
  quizProgress,
  quizStarted,
  setQuizStarted,
  handleStartQuiz,
}) => {
  const navigate = useNavigate();
  return (
    <AnimatePresence>
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="flex flex-col items-center justify-center text-center rounded-sm z-20 bg-red-500"
      >
        <BaseCard className="relative flex flex-col items-center justify-center gap-5 w-100 xl:w-auto">
          <img
            src={SparkTwo}
            alt=""
            className="absolute -right-10 -top-10 w-25 xl:w-50 xl:-right-20 xl:-top-20"
          />
          {quizProgress == null ? (
            <>
              <h1 className="text-3xl font-semibold text-heading">
                Hello {localStorage.getItem("username")}!
              </h1>
              <h2 className="text-2xl font-semibold text-heading">
                Choose your interest!
              </h2>
              <div className="flex flex-col items-center gap-4 w-100">
                <QuestionsInputDropdown
                  label={"Number of Questions"}
                  initialValue={"10"}
                  onChange={(value: string) => {
                    setQuizStarted({
                      ...quizStarted,
                      amount: parseInt(value, 10),
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
                <PrimaryButton
                  type="submit"
                  onClick={() => {
                    handleStartQuiz();
                  }}
                  className="w-1/2 xl:w-full"
                >
                  Start Quiz
                </PrimaryButton>
              </div>
            </>
          ) : (
            <div className="flex flex-col items-center justify-center font-semibold ">
              <h1 className="mb-3 text-xl text-black xl:text-5xl">
                You have quiz ongoing!
              </h1>
              <p className="mb-5 text-x text-center text-accent-two">
                Continue your quiz or finish it to start a new one.
              </p>
              <PrimaryButton
                type="button"
                onClick={() =>
                  navigate("/quiz/questions", {
                    state: {
                      quizProgress: quizProgress,
                      questions: quizProgress.questions,
                      username: quizProgress.username,
                    },
                  })
                }
              >
                Continue Quiz
              </PrimaryButton>
            </div>
          )}
        </BaseCard>
      </motion.div>
    </AnimatePresence>
  );
};
