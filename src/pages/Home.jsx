import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="flex items-center relative">
      <img
        className="h-[80vh]"
        src="https://github.com/mia-seo/wanted-pre-onboarding-frontend/assets/117281717/66b69edc-e0ed-4b11-a2db-056ebecb10a8"
        alt="banner"
      />
      <div className="flex gap-3 absolute bottom-[50px] left-[50px]">
        {buttons.map((el, index) => (
          <Link
            to={`/${el}`}
            key={index}
            className="btn btn-active w-20 bg-brandB text-brandG font-bold"
          >
            {el}
          </Link>
        ))}
      </div>
    </div>
  );
}

const buttons = ["signup", "signin", "todo"];
