import { useState } from "react";
import InputField from "../../components/InputField";
import { useNavigate } from "react-router";

export default function LoginPage() {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });
  const navigate = useNavigate();
  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle login logic here
    const { email, password } = form;
    if (email === "admin@gmail.com" && password == "admin") {
      navigate("/dashboard");
    }
  };
  return (
    <div className="min-h-screen bg-white flex items-center justify-center">
      <div className="flex flex-col items-center justify-center gap-5 p-5 shadow-lg rounded">
        <h1>Login</h1>
        <InputField
          type="email"
          label="email"
          onChange={(e) => setForm({ ...form, email: e.target.value })}
        />
        <InputField
          type="password"
          label="password"
          onChange={(e) => setForm({ ...form, password: e.target.value })}
        />
        <button
          type="submit"
          onClick={handleLogin}
          className="bg-black text-white pl-4 pr-4 py-2 rounded cursor-pointer hover:bg-gray-500 "
        >
          Login
        </button>
      </div>
    </div>
  );
}
