import React, { useState } from "react";
import { Props } from "./type";
import Link from "next/link";
import useModel from "./model";

export const UI: React.FC<Props> = ({
  href,
  text,
  className,
  isLink = false,
  type = "primary",
  buttonType = "button",
  onClick,
  disabled,
}) => {
  const { types } = useModel();

  return (
    <>
      {isLink ? (
        <Link href={href || "/"}>
          <span
            onClick={(e) => {
              if (disabled) e.preventDefault();
            }}
            className={`btn rounded px-4 py-1 text-center ${
              disabled ? types[`${type}Disabled`] : types[type]
            } text-sm font-medium transition-all duration-500 ${
              className ? className : ""
            }`}
          >
            {text}
          </span>
        </Link>
      ) : (
        <button
          onClick={(e) => {
            if (onClick && !disabled) onClick();
            if (disabled) e.preventDefault();
          }}
          type={buttonType}
          className={`btn rounded px-4 py-1 text-center ${
            disabled ? types[`${type}Disabled`] : types[type]
          } text-sm font-medium transition-all duration-500 ${
            className ? className : ""
          }`}
        >
          {text}
        </button>
      )}
    </>
  );
};
