import React from "react";
import { Props } from "./type";
import useModel from "./model";
import { Up } from "@/shared/icons";

export const UI: React.FC<Props> = ({ className }) => {
  const { show } = useModel();

  return (
    <button
      type="button"
      onClick={() => {
        document.documentElement.scrollTop = 0;
      }}
      className={`back-to-top-btn cursor-pointer inline-flex items-center justify-center right-5 transition-all duration-1000 shadow-lg z-40 fixed w-10 h-10 rounded bg-primary-orange text-white ${
        show ? "bottom-5" : "-bottom-full"
      } ${className ? className : ""}`}
    >
      <Up />
    </button>
  );
};
