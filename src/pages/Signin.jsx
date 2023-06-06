import React from "react";
import Form from "../components/Form";

export default function Signin() {
  return (
    <div className="w-full md:w-[50%] h-[70%] bg-brandG flex flex-col justify-evenly items-center rounded-xl">
      <h1 className="text-brandB text-3xl font-bold">SingIn</h1>
      <Form pageName="signin" />
    </div>
  );
}
