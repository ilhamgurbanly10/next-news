import React from "react";
import { Props } from "./type";

export const UI: React.FC<Props> = ({ className, children }) => {
  return (
    <section className={`section px-4 lg:px-20 ${className ? className : ""}`}>
      {children}
    </section>
  );
};
