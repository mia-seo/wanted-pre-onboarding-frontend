import { createContext, useContext, useEffect, useState } from "react";
import Login from "../api/login/loginApi";
import LoginClient from "../api/login/loginApiClient";
import Todo from "../api/todo/todoApi";
import TodoClient from "../api/todo/todoApiClient";

export const TodoApiContext = createContext();

export function TodoApiProvider({ children }) {
  const initialToken = localStorage.getItem("token");
  const [token, setToken] = useState(initialToken);

  const loginClient = new LoginClient();
  const todoClient = new TodoClient(token);
  const login = new Login(loginClient);
  const todoApi = new Todo(todoClient);

  return (
    <TodoApiContext.Provider value={{ login, todoApi, token, setToken }}>
      {children}
    </TodoApiContext.Provider>
  );
}

export function useTodoApi() {
  return useContext(TodoApiContext);
}
