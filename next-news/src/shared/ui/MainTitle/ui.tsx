import React from "react";
import { Props } from "./type";
import { useTranslation } from "next-i18next";
export const UI: React.FC<Props> = ({
  className,
  text,
  centerUnderline,
  centerUnderlineColorClassName,
}) => {
  const { t } = useTranslation("common");

  return (
    <h2
      className={`title text-primary-blue font-medium text-lg lg:text-2xl ${
        centerUnderline ? "inline-flex flex-col items-center" : ""
      } ${className ? className : ""}`}
    >
      <span className="block">{t(text)}</span>
      {centerUnderline && (
        <div
          className={`clip-path-center flex relative flex-nowrap h-1 w-10 mt-3 bg-primary-orange ${
            centerUnderlineColorClassName ? centerUnderlineColorClassName : ""
          }`}
        />
      )}
    </h2>
  );
};
