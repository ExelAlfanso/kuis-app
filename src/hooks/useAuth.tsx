import { useEffect, useState } from "react";

export function useAuth() {
  const [username, setUsername] = useState<string | null>(
    localStorage.getItem("username")
  );
  const login = (username: string) => {
    localStorage.setItem("username", username);
  };
  const logout = () => {
    localStorage.removeItem("username");
  };
  const loadUser = () => {
    setUsername(localStorage.getItem("username"));
  };
  useEffect(() => {
    loadUser();
  }, []);
  return { login, logout, username, loadUser };
}
