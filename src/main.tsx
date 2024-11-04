import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import TaskPage from "./page/TaskPage/TaskPage.tsx";
import LoginPage from "./page/LoginPage/LoginPage.tsx";
import { AuthContext } from "./context/AuthContext.tsx";

const route = createBrowserRouter([
  {
    path: "/",
    element: <TaskPage />,
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <AuthContext.Provider value={null}>
      <RouterProvider router={route} />
    </AuthContext.Provider>
  </StrictMode>
);
