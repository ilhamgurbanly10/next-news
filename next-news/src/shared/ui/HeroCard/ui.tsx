import React from "react";
import { Props } from "./type";
import { useTranslation } from "next-i18next";
import Link from "next/link";
import SmallButton from "../Buttons/SmallButton";
import { User, Calendar } from "@/shared/icons";
import MainTitle from "../MainTitle";

export const UI: React.FC<Props> = ({
  className,
  src,
  label,
  href,
  user_name,
  date,
  title,
}) => {
  const { t } = useTranslation("common");
  return (
    <div
      className={`hero-card img-hover-effect w-full inline-flex flex-col items-center ${
        className ? className : ""
      }`}
    >
      <Link href={href}>
        <div className="relative flex w-full justify-center">
          <div className="overflow-hidden w-40 h-72 md:h-96 w-full rounded-md">
            <div
              style={{ backgroundImage: `url("${src}")` }}
              className={`img-hover-effect-img w-full h-full cursor-pointer shadow-2xl transition-all duration-700 scale-100 bg-center bg-cover inset-0`}
            />
          </div>
          <SmallButton
            text={label}
            isLink={true}
            href={href}
            className="absolute -bottom-3"
          />
        </div>
      </Link>

      <div className="mt-4 flex flex-col items-center">
        <Link href={href}>
          <MainTitle text={title} className="mt-4 cursor-pointer text-center" />
        </Link>

        <div className="inline-flex items-center mt-2">
          <span className="inline-flex mr-4 items-center text-primary-grey font-bold">
            <User />
            <span className="uppercase ml-2">BY {user_name}</span>
          </span>

          <span className="inline-flex items-center text-primary-grey font-bold">
            <Calendar />
            <span className="uppercase ml-2">{date}</span>
          </span>
        </div>
      </div>
    </div>
  );
};
