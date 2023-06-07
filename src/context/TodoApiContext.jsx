import { createContext, useContext, useEffect, useState } from "react";
import Login from "../api/login/loginApi";
import LoginClient from "../api/login/loginApiClient";
import Todo from "../api/todo/todoApi";
import TodoClient from "../api/todo/todoApiClient";

export const TodoApiContext = createContext();

const token = localStorage.getItem("token");

const loginClient = new LoginClient();
const todoClient = new TodoClient(token);
const login = new Login(loginClient);
const todoApi = new Todo(todoClient);

export function TodoApiProvider({ children }) {
  const [todos, setTodos] = useState([]);
  const [refresh, setRefresh] = useState(1);

  useEffect(() => {
    todoApi.getTodos().then((todos) => setTodos(todos));
  }, [refresh]);

  return (
    <TodoApiContext.Provider
      value={{ login, token, todoApi, todos, setRefresh }}
    >
      {children}
    </TodoApiContext.Provider>
  );
}

export function useTodoApi() {
  return useContext(TodoApiContext);
}
