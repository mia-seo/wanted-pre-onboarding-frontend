import React, { useCallback, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useTodoApi } from "../context/TodoApiContext";
import TodoList from "../components/todo/TodoList";
import Input from "../components/todo/Input";

export default function Todo() {
  const { token, todoApi } = useTodoApi();
  const navigate = useNavigate();
  const [todos, setTodos] = useState([]);

  const createTodo = (todo) => {
    todoApi.createTodo(todo);
  };

  const updateTodo = useCallback(
    (id, todo, isCompleted) => {
      todoApi.updateTodo(id, todo, isCompleted);
      setTodos(
        todos.map((todo) => {
          if (todo.id === id) {
            return { id, todo, isCompleted };
          }
          return todo;
        })
      );
    },
    [todoApi]
  );

  const deleteTodo = useCallback(
    (id) => {
      todoApi.deleteTodo(id);
      if (todos.length > 1) {
        setTodos(todos.filter((todo) => todo.id !== id));
      } else {
        setTodos([]);
      }
    },
    [todoApi, todos]
  );

  useEffect(() => {
    todoApi.getTodos().then((todos) => setTodos(todos));
  }, [todoApi, createTodo]);

  if (!token) {
    navigate("/signin");
  }
  return (
    <div className="w-full md:w-[50%] h-[70%] flex flex-col justify-evenly items-center bg-brandG rounded-xl">
      <h1 className="text-brandB text-3xl font-bold text-center py-8">
        ToDo-List
      </h1>
      <ul className="form-control w-[80%] h-[65%] bg-brandB py-5 px-5 overflow-y-scroll">
        {todos &&
          todos.map((todo) => (
            <TodoList
              key={todo.id}
              todo={todo}
              onUpdate={updateTodo}
              onDelete={deleteTodo}
            />
          ))}
      </ul>
      <Input onCreate={createTodo} />
    </div>
  );
}
