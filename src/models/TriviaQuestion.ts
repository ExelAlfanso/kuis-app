export type TriviaQuestion = {
  id: string;
  category: string;
  type: "multiple" | "boolean";
  difficulty: string;
  question: string;
  hashed_answer: string;
  answers: string[];
};
