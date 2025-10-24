import { useNavigate } from "react-router-dom";
import Button from "./components/Button";

export default function App() {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen bg-white flex flex-col items-center justify-center gap-5">
      <h1 className="text-black font-roboto text-3xl">
        Welcome to the Quiz App
      </h1>
      <Button onClick={() => navigate("/login")}>Login</Button>
    </div>
  );
}
