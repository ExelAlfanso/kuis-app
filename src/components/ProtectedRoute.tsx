import { Navigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth"; // adjust path if needed

interface ProtectedRouteProps {
  children: React.ReactNode;
}

export default function ProtectedRoute({ children }: ProtectedRouteProps) {
  const { username } = useAuth();
  if (!username) {
    return <Navigate to="/login" replace />;
  }

  return <>{children}</>;
}
