import { useState } from "react";
import { useNavigate } from "react-router";
import { useAuth } from "../../hooks/useAuth";
import TopBar from "../../components/TopBar";
import Brutality from "../../sections/Brutality";
import LoginForm from "../../forms/LoginForm";

export default function LoginPage() {
  const { username, login } = useAuth();
  const [inputUsername, setUsername] = useState("");

  const navigate = useNavigate();

  const handleSubmit = () => {
    if (!username) {
      login(inputUsername);
    }
    navigate("/quiz");
  };
  return (
    <div className="flex flex-col items-start justify-center min-h-screen bg-primary ">
      <TopBar></TopBar>
      <LoginForm
        onSubmit={handleSubmit}
        onChangeUsername={setUsername}
        username={inputUsername}
      />
      <Brutality />
    </div>
  );
}
