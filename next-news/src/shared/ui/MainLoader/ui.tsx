import React from "react";
import { Props } from "./type";
import { Loading } from "@/shared/icons";

export const UI: React.FC<Props> = ({ className, show }) => {
  return (
    <section
      className={`main-loader text-white z-loader fixed inset-0 transition-all flex items-center justify-center bg-overlay-light ${
        show ? "opacity-1 visible" : "opacity-0 invisible"
      }  ${className ? className : ""}`}
    >
      <span className="animate-spin text-6xl">
        <Loading />
      </span>
    </section>
  );
};
