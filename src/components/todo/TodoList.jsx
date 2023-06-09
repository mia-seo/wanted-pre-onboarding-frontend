import React, { useState } from "react";
import Edit from "./Edit";

export default function TodoList({
  todo: { id, todo, isCompleted },
  onUpdate,
  onDelete,
}) {
  const [checked, setChecked] = useState(isCompleted);
  const [isEditing, setIsEditing] = useState(false);

  const onCheck = (e) => {
    const checked = e.target.checked;
    setChecked(checked);
    onUpdate(id, todo, checked);
  };

  const remove = () => {
    onDelete(id);
  };

  return (
    <li key={id}>
      {isEditing ? (
        <Edit
          onUpdate={onUpdate}
          editing={setIsEditing}
          id={id}
          isCompleted={isCompleted}
        />
      ) : (
        <label className="label cursor-pointer flex justify-between">
          <div className="flex items-center gap-3">
            <input
              type="checkbox"
              checked={checked}
              onChange={onCheck}
              className="checkbox checkbox-primary"
            />
            <span className="label-text text-lg text-brandG font-bold">
              {todo}
            </span>
          </div>
          <div className="flex items-center gap-3">
            <button
              className="hover:text-brandG"
              onClick={() => setIsEditing(true)}
            >
              수정
            </button>
            <button className="hover:text-brandG" onClick={remove}>
              삭제
            </button>
          </div>
        </label>
      )}
    </li>
  );
}
