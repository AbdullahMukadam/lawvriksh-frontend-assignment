import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Dashboard } from "./pages/Dashboard/Dashboard";

createRoot(document.getElementById("app") as HTMLElement).render(
  <StrictMode>
    <Dashboard />
  </StrictMode>,
);
