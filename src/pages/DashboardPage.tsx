import { useNavigate } from "react-router-dom";
import Button from "../components/Button";

export default function DashboardPage() {
  const navigate = useNavigate();
  const handleStartQuiz = () => {
    navigate("/quiz");
  };
  return (
    <div className="min-h-screen bg-white flex flex-col items-center justify-center">
      <h1 className="text-black">Welcome to Quiz Web App</h1>

      <Button onClick={handleStartQuiz}>Start Quiz?</Button>
    </div>
  );
}
