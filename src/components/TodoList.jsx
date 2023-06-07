import React, { useState } from "react";
import Swal from "sweetalert2";
import { useTodoApi } from "../context/TodoApiContext";

export default function TodoList({ todo: { id, todo, isCompleted } }) {
  const [checked, setChecked] = useState(isCompleted);
  const [isEditing, setIsEditing] = useState(false);
  const [text, setText] = useState("");
  const { todoApi, setRefresh } = useTodoApi();

  const handleChangeCheck = (e) => {
    const checked = e.target.checked;
    setChecked(checked);
    if (isEditing) {
      !text &&
        Swal.fire({
          icon: "error",
          text: "내용을 입력해주세요",
        });
      if (text) {
        todoApi.updateTodo(id, text, isCompleted);
        setText("");
        setIsEditing(false);
      }
    } else {
      todoApi.updateTodo(id, todo, checked);
    }
  };

  const remove = () => {
    setRefresh((prev) => prev * -1);
    todoApi.deleteTodo(id);
  };

  const handleChangeInput = (e) => setText(e.target.value);

  return (
    <li key={id}>
      <label className="label cursor-pointer flex justify-between">
        {isEditing ? (
          <input
            className="w-[65%] px-2 py-1 focus:outline-none rounded-sm text-brandG"
            type="text"
            onChange={handleChangeInput}
          />
        ) : (
          <div className="flex items-center gap-3">
            <input
              type="checkbox"
              checked={checked}
              onChange={handleChangeCheck}
              className="checkbox checkbox-primary"
            />
            <span className="label-text text-lg text-brandG font-bold">
              {todo}
            </span>
          </div>
        )}
        <div className="flex items-center gap-3">
          {isEditing ? (
            <>
              <button className="hover:text-brandG" onClick={handleChangeCheck}>
                수정
              </button>
              <button
                className="hover:text-brandG"
                onClick={() => {
                  setIsEditing(false);
                  setText("");
                }}
              >
                취소
              </button>
            </>
          ) : (
            <>
              <button
                className="hover:text-brandG"
                onClick={() => setIsEditing(true)}
              >
                수정
              </button>
              <button className="hover:text-brandG" onClick={remove}>
                삭제
              </button>
            </>
          )}
        </div>
      </label>
    </li>
  );
}
