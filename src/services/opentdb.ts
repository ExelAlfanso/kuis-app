import { quizDatas } from "../datas/quizDatas";
import api from "./axios";

export type TriviaQuestion = {
  category: string;
  type: "multiple" | "boolean";
  difficulty: string;
  question: string;
  correct_answer: string;
  incorrect_answers: string[];
  answers: string[];
};

function decodeHTML(html: string): string {
  const parser = new DOMParser();
  const doc = parser.parseFromString(html, "text/html");
  return doc.documentElement.textContent || "";
}

export async function fetchTriviaQuestions(
  amount: number,
  category: string,
  difficulty: string
) {
  const categoryID = quizDatas.find((data) => data.name === category)?.id || "";
  const res = await api.get(
    `https://opentdb.com/api.php?amount=${amount}&category=${categoryID}&difficulty=${difficulty.toLowerCase()}`
  );

  const questions = res.data.results.map((q: TriviaQuestion) => {
    const decodedQuestion = decodeHTML(q.question);
    const decodedCorrect = decodeHTML(q.correct_answer);
    const decodedIncorrect = q.incorrect_answers.map(decodeHTML);
    const allAnswers = [...q.incorrect_answers, q.correct_answer];

    const shuffledAnswers = allAnswers.sort(() => Math.random() - 0.5);

    return {
      ...q,
      question: decodedQuestion,
      correct_answer: decodedCorrect,
      incorrect_answers: decodedIncorrect,
      answers: shuffledAnswers,
    };
  });

  return questions as TriviaQuestion[];
}
