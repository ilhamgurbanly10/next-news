import React from "react";
import { Props } from "./type";
import { useTranslation } from "next-i18next";
export const UI: React.FC<Props> = ({
  className,
  text,
  leftUnderline,
  rightUnderline,
  leftUnderlineColorClassName = "bg-primary-orange",
}) => {
  const { t } = useTranslation("common");

  return (
    <h2
      className={`title text-white font-bold text-lg ${
        className ? className : ""
      }`}
    >
      <span className="block">{t(text)}</span>
      {(leftUnderline || rightUnderline) && (
        <div
          className={`clip-path-right flex relative flex-nowrap h-1 w-10 mt-2 ${leftUnderlineColorClassName}`}
        />
      )}
    </h2>
  );
};
