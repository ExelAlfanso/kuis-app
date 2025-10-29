import { useState } from "react";
import { useNavigate } from "react-router";
import { useAuth } from "../../../hooks/useAuth";
import LoginForm from "../../../forms/LoginForm";

export default function LoginPage() {
  const { login } = useAuth();
  const [inputUsername, setUsername] = useState("");

  const navigate = useNavigate();

  const handleSubmit = () => {
    login(inputUsername);
    navigate("/quiz");
  };
  return (
    <div className="flex items-center justify-center w-full xl:items-start xl:justify-start pt-45 xl:pt-45 ">
      <LoginForm
        onSubmit={handleSubmit}
        onChangeUsername={setUsername}
        username={inputUsername}
      />
    </div>
  );
}
