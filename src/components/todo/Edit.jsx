import React, { useState } from "react";
import Swal from "sweetalert2";

export default function Edit({ onUpdate, editing, id, isCompleted }) {
  const [text, setText] = useState("");

  const handleChange = (e) => setText(e.target.value);
  const handleUpdate = () => {
    if (!text) {
      Swal.fire({
        icon: "error",
        text: "내용을 입력해주세요",
      });
    } else {
      onUpdate(id, text, isCompleted);
      editing(false);
    }
  };
  const handleCancel = () => {
    editing(false);
    setText("");
  };

  return (
    <label className="label cursor-pointer flex justify-between">
      <input
        className="w-[65%] px-2 py-1 focus:outline-none rounded-sm text-brandG"
        type="text"
        value={text}
        onChange={handleChange}
      />
      <div className="flex items-center gap-3">
        <button className="hover:text-brandG" onClick={handleUpdate}>
          수정
        </button>
        <button className="hover:text-brandG" onClick={() => handleCancel}>
          취소
        </button>
      </div>
    </label>
  );
}
