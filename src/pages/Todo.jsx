import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Input from "../components/Input";
import TodoList from "../components/TodoList";
import { useTodoApi } from "../context/TodoApiContext";

export default function Todo() {
  const { token, todos } = useTodoApi();
  const navigate = useNavigate();

  if (!token) {
    navigate("/signin");
  }
  return (
    <div className="w-full md:w-[50%] h-[70%] flex flex-col justify-evenly items-center bg-brandG rounded-xl">
      <h1 className="text-brandB text-3xl font-bold text-center py-8">
        ToDo-List
      </h1>
      <ul className="form-control w-[80%] h-[65%] bg-brandB py-5 px-5 overflow-y-scroll">
        {todos && todos.map((todo) => <TodoList key={todo.id} todo={todo} />)}
      </ul>
      <Input />
    </div>
  );
}
