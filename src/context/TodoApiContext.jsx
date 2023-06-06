import { createContext, useContext } from "react";
import Login from "../api/login";
import LoginClient from "../api/loginClient";

export const TodoApiContext = createContext();

const client = new LoginClient();
const login = new Login(client);

export function TodoApiProvider({ children }) {
  const token = localStorage.getItem("token");
  return (
    <TodoApiContext.Provider value={{ login, token }}>
      {children}
    </TodoApiContext.Provider>
  );
}

export function useTodoApi() {
  return useContext(TodoApiContext);
}
