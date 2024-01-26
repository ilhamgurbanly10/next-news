import React, { useState } from "react";
import { Props } from "./type";
import Link from "next/link";

export const UI: React.FC<Props> = ({
  href,
  text,
  className,
  isLink = true,
  colorClassName = "text-white",
  colorClassNameOnHover = "text-primary-orange",
  onClick,
  underline,
}) => {
  const [showUnderline, setShowUnderline] = useState<boolean>(false);
  return (
    <>
      {isLink ? (
        <Link href={href || "/"}>
          <span
            onMouseOver={() => {
              if (underline) setShowUnderline(true);
            }}
            onMouseOut={() => {
              if (underline) setShowUnderline(false);
            }}
            className={`text-btn text-sm font-medium transition-all cursor-pointer ${colorClassName} hover:${colorClassNameOnHover} ${
              className ? className : ""
            }`}
          >
            {text}
            {underline && (
              <span
                className={`transition-all block h-px.5 mt-1 duration-700 bg-${colorClassName.slice(
                  5
                )} hover:${colorClassNameOnHover.slice(5)} ${
                  showUnderline ? "w-full" : "w-0"
                }`}
              />
            )}
          </span>
        </Link>
      ) : (
        <button
          onClick={() => {
            if (onClick) onClick();
          }}
          onMouseOver={() => {
            if (underline) setShowUnderline(true);
          }}
          onMouseOut={() => {
            if (underline) setShowUnderline(false);
          }}
          type="button"
          className={`text-btn text-sm font-medium transition-all cursor-pointer ${colorClassName} hover:${colorClassNameOnHover} ${
            className ? className : ""
          }`}
        >
          {text}
          {underline && (
            <span
              className={`transition-all block h-px.5 mt-1 duration-700 bg-${colorClassName.slice(
                5
              )} hover:${colorClassNameOnHover.slice(5)} ${
                showUnderline ? "w-full" : "w-0"
              }`}
            />
          )}
        </button>
      )}
    </>
  );
};
