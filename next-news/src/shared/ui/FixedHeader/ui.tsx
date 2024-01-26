import React from "react";
import { Props } from "./type";
import useModel from "./model";

export const UI: React.FC<Props> = ({ className, children }) => {
  const { show } = useModel();

  return (
    <div
      className={`fixed-header transition-all duration-1000 shadow-lg z-40 fixed w-full ${
        show ? "top-0" : "-top-full"
      } ${className ? className : ""}`}
    >
      {children}
    </div>
  );
};
