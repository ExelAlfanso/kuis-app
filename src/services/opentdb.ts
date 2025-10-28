import { quizDatas } from "../datas/quizDatas";
import { hashString } from "../utils/hashString";
import { sessionKey } from "../utils/sessionKey";
import api from "./axios";
import type { TriviaQuestion } from "../models/TriviaQuestion";
import type { Response } from "../models/Reponse";

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

  const questions = await Promise.all(
    res.data.results.map(async (q: Response) => {
      //perlu didecode dikarenakan api dari opentdb masih encoded
      const decodedQuestion = decodeHTML(q.question);
      const decodedCorrect = decodeHTML(q.correct_answer);
      const decodedIncorrect = q.incorrect_answers.map(decodeHTML);
      const allAnswers = [...decodedIncorrect, decodedCorrect];

      const hashedAnswer = await hashString(q.correct_answer + sessionKey);
      const shuffledAnswers = allAnswers.sort(() => Math.random() - 0.5);

      return {
        id: crypto.randomUUID(),
        type: q.type,
        category: q.category,
        difficulty: q.difficulty,
        question: decodedQuestion,
        hashed_answer: hashedAnswer,
        answers: shuffledAnswers,
      };
    })
  );

  return questions as TriviaQuestion[];
}
