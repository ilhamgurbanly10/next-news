import React from "react";
import { Props } from "./type";
import { Right } from "@/shared/icons";

export const UI: React.FC<Props> = ({
  classNameStr,
  onClick,
  type = "right",
}) => {
  return (
    <button
      type="button"
      onClick={() => {
        if (onClick) onClick();
      }}
      className={`w-10 h-10 rounded-full flex items-center justify-center text-white bg-primary-orange hover:bg-primary-blue transition-all ${
        classNameStr ? classNameStr : ""
      }`}
    >
      <span className={`${type === "left" ? "rotate-180" : "rotate-0"}`}>
        <Right />
      </span>
    </button>
  );
};
