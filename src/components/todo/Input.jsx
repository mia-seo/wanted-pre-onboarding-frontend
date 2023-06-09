import React, { useState } from "react";

export default function Input({ onCreate }) {
  const [text, setText] = useState("");
  const handleChange = (e) => setText(e.target.value);
  const handleSubmit = (e) => {
    e.preventDefault();
    if (text) {
      onCreate(text);
      setText("");
    }
  };

  return (
    <form className="w-[80%] flex gap-3 items-center" onSubmit={handleSubmit}>
      <input
        data-testid="new-todo-input"
        className="input input-bordered w-full bg-brandB text-brandG font-semibold"
        type="text"
        value={text}
        onChange={handleChange}
      />
      <button
        data-testid="new-todo-add-button"
        className="btn bg-brandB my-10 text-brandG text-lg font-bold border-none"
      >
        추가
      </button>
    </form>
  );
}
