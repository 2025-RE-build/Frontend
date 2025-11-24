import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import GlobalStyles from "./styles/GlobalStyles"; // ← 추가

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <>
      <GlobalStyles /> {/* ← 여기에 추가해야 적용됨 */}
      <App />
    </>
  </StrictMode>
);
