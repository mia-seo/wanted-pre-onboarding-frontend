import React from "react";
import { Navigate } from "react-router-dom";
import { useTodoApi } from "../context/TodoApiContext";

export default function ProtectedRoute({ children }) {
  const { token } = useTodoApi();
  if (token) {
    return <Navigate to="/todo" />;
  }
  return <>{children}</>;
}
