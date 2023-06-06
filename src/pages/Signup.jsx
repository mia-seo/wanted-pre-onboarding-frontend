import React from "react";
import Form from "../components/Form";

export default function Signup() {
  return (
    <div className="w-full md:w-[50%] h-[70%] bg-brandG flex flex-col justify-evenly items-center rounded-xl">
      <h1 className="text-brandB text-3xl font-bold">SingUp</h1>
      <Form pageName="signup" />
    </div>
  );
}
