import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useTodoApi } from "../context/TodoApiContext";

export default function Form({ pageName }) {
  const [value, setValue] = useState({
    email: "",
    password: "",
  });
  const isValidEmail = value.email.includes("@");
  const isValidPassword = value.password.length >= 8;
  const { login } = useTodoApi();
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValue((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    login[pageName](value.email, value.password).then((isSuccess) => {
      if (pageName === "signin") {
        isSuccess && navigate("/todo");
      }
      if (pageName === "signup") {
        isSuccess && navigate("/signin");
      }
    });
  };

  return (
    <form className="form-control w-full max-w-xs" onSubmit={handleSubmit}>
      {inputs.map(({ textId, title, placeholder }) => (
        <div key={textId}>
          <label className="label">
            <span className="label-text text-brandB text-lg font-semibold">
              {title}
            </span>
          </label>
          <input
            data-testid={textId}
            type={title === "password" ? "password" : "text"}
            name={title}
            placeholder={placeholder}
            className="input input-bordered w-full max-w-xs text-brandG font-semibold"
            value={value[title]}
            onChange={handleChange}
          />
        </div>
      ))}
      <button
        className="btn bg-brandB my-10 text-brandG text-lg font-bold"
        data-textid="signup-button"
        disabled={!(isValidEmail && isValidPassword)}
      >
        Submit
      </button>
    </form>
  );
}

const inputs = [
  { textId: "email-input", title: "email", placeholder: "'@'를 포함해주세요" },
  {
    textId: "password-input",
    title: "password",
    placeholder: "8자 이상 입력해주세요",
  },
];
