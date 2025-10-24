import { useState } from "react";
import InputField from "../../components/InputField";
import { useNavigate } from "react-router";
import Button from "../../components/Button";

export default function LoginPage() {
  const [username, setUsername] = useState("");
  const navigate = useNavigate();
  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle login logic here
    localStorage.setItem("username", username);
    navigate("/quiz");
  };
  return (
    <div className="min-h-screen bg-white flex items-center justify-center">
      <div className="flex flex-col items-center justify-center gap-5 p-5 shadow-lg rounded">
        <h1 className="text-primary text-3xl font-semibold">
          Welcome to TrivQuiz!
        </h1>
        <InputField
          type="text"
          placeholder="Enter your username"
          onChange={(e) => setUsername(e.target.value)}
        />
        <Button type="submit" onClick={handleLogin}>
          Start Quiz
        </Button>
      </div>
    </div>
  );
}
