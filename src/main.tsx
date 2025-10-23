import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoginPage from "./pages/auth/LoginPage.tsx";
import DashboardPage from "./pages/DashboardPage.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}></Route>
        <Route path="/login" element={<LoginPage />}></Route>
        <Route path="/dashboard" element={<DashboardPage />}></Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
