import { createBrowserRouter } from "react-router-dom";
import { Layout } from "./components/layout/Layout";
import { Home } from "./pages/Home";
import { Modes } from "./pages/Modes";
import { Quiz } from "./pages/Quiz";
import { DificultySelector } from "./pages/DificultySelector";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Layout,
    children: [
      { index: true, Component: Home },
      { path: "/modos", Component: Modes },
      { path: "/:modality", Component: DificultySelector },
      { path: "/quiz/:modality/:dificulty", Component: Quiz },
    ],
  },
]);
