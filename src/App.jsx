import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ProtectedRoute from "./components/ProtectedRoute";
import { TodoApiProvider } from "./context/TodoApiContext";
import Home from "./pages/Home";
import Signin from "./pages/Signin";
import Signup from "./pages/Signup";
import Todo from "./pages/Todo";

const router = createBrowserRouter([
  { path: "/", element: <Home /> },
  {
    path: "/signin",
    element: (
      <ProtectedRoute>
        <Signin />
      </ProtectedRoute>
    ),
  },
  {
    path: "/signup",
    element: (
      <ProtectedRoute>
        <Signup />
      </ProtectedRoute>
    ),
  },
  { path: "/todo", element: <Todo /> },
]);

export default function App() {
  return (
    <TodoApiProvider>
      <RouterProvider router={router} />
    </TodoApiProvider>
  );
}
