import React from "react";
import { useNavigate } from "react-router-dom";
import Form from "../components/Form";
import { useTodoApi } from "../context/TodoApiContext";

export default function Signup() {
  const { token } = useTodoApi();
  const navigate = useNavigate();

  if (token) navigate("/todo");

  return (
    <div className="w-full md:w-[50%] h-[70%] bg-brandG flex flex-col justify-evenly items-center rounded-xl">
      <h1 className="text-brandB text-3xl font-bold">SingUp</h1>
      <Form pageName="signup" />
    </div>
  );
}
