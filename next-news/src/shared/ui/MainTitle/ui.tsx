import React from "react";
import { Props } from "./type";
import { useTranslation } from "next-i18next";
export const UI: React.FC<Props> = ({ className, text }) => {
  const { t } = useTranslation("common");

  return (
    <h2
      className={`title text-primary-blue text-center lg:text-start font-medium text-lg lg:text-2xl  ${
        className ? className : ""
      }`}
    >
      <span>{t(text)}</span>
    </h2>
  );
};
