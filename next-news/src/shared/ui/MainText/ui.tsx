import React from "react";
import { Props } from "./type";
import { useTranslation } from "next-i18next";
export const UI: React.FC<Props> = ({ className, text }) => {
  const { t } = useTranslation("common");

  return (
    <p
      className={`text text-primary-blue text-base  ${
        className ? className : ""
      }`}
    >
      <span>{t(text)}</span>
    </p>
  );
};
