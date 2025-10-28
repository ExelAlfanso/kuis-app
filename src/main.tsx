import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoginPage from "./pages/(mainLayout)/auth/LoginPage.tsx";
import QuizPage from "./pages/quiz/QuizPage.tsx";
import QuestionsPage from "./pages/quiz/QuestionsPage.tsx";
import LandingPage from "./pages/LandingPage.tsx";
import LayoutTwo from "./pages/quiz/Layout.tsx";
import LayoutFirst from "./pages/(mainLayout)/Layout.tsx";
import ProtectedRoute from "./components/ProtectedRoute.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route element={<LayoutFirst />}>
          <Route path="/login" element={<LoginPage />}></Route>
          <Route path="/" element={<LandingPage />}></Route>
        </Route>
        <Route element={<LayoutTwo />}>
          <Route path="/quiz" element={<QuizPage />}></Route>
          <Route
            path="/quiz/questions"
            element={
              <ProtectedRoute>
                <QuestionsPage />
              </ProtectedRoute>
            }
          ></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
