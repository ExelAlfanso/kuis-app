import { useEffect, useState } from "react";
import type { TriviaQuestion } from "../models/TriviaQuestion";

export const QUIZPROGRESS_KEY = "quizProgress";

interface QuizProgressState {
  initialTimeLeft: number;
  username: string | null;
  index: number;
  questions: TriviaQuestion[];
  timeLeft?: number;
  correctAnswers?: number;
  finished?: boolean;
}

export function useQuizProgress() {
  const [quizProgress, setQuizProgress] = useState<QuizProgressState | null>(
    null
  );

  useEffect(() => {
    loadQuizProgress();
  }, []);
  const saveQuizProgress = (progress: QuizProgressState) => {
    setQuizProgress(progress);
    localStorage.setItem(QUIZPROGRESS_KEY, JSON.stringify(progress));
  };

  const loadQuizProgress = () => {
    const savedProgress = localStorage.getItem(QUIZPROGRESS_KEY);
    if (savedProgress) {
      if (
        JSON.parse(savedProgress).username === localStorage.getItem("username")
      ) {
        setQuizProgress(JSON.parse(savedProgress));
        console.log(
          "Quiz progress loaded from localStorage.",
          JSON.parse(savedProgress)
        );
      }
    }
  };

  const deleteQuizProgress = () => {
    setQuizProgress(null);
    localStorage.removeItem(QUIZPROGRESS_KEY);
  };
  return {
    quizProgress,
    setQuizProgress: saveQuizProgress,
    loadQuizProgress,
    deleteQuizProgress,
  };
}
