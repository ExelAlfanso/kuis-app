import api from "./axios";

export type TriviaQuestion = {
  category: string;
  type: "multiple" | "boolean";
  difficulty: string;
  question: string;
  correct_answer: string;
  incorrect_answers: string[];
};

export async function fetchTriviaQuestions(amount: number) {
  const res = await api.get(`https://opentdb.com/api.php?amount=${amount}`);
  return res.data.results as TriviaQuestion[];
}
