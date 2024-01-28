import React from "react";
import { Props } from "./type";

export const UI: React.FC<Props> = ({
  className,
  underlineColorClassName = "bg-primary-orange",
}) => {
  return (
    <div
      className={`underline relative w-full mt-4 ${className ? className : ""}`}
    >
      <div
        className={`clip-path-right relative z-20 h-1 w-10 ${underlineColorClassName}`}
      />
      <div className="w-full absolute h-full inset-0 bg-white border"></div>
    </div>
  );
};
