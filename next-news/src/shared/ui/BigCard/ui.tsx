import React from "react";
import { Props } from "./type";
import { useTranslation } from "next-i18next";
import Link from "next/link";
import styles from "./styles.module.scss";
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
      className={`big-card img-hover-effect after:content-[''] after:absolute after:w-full after:h-full after:top-0 after:left-0 after:bg-linear-gradient p-5  relative overflow-hidden rounded-md w-full min-h-64 lg:min-h-96 h-full inline-flex flex-col md:items-start justify-end ${
        className ? className : ""
      }`}
    >
      <div className="absolute w-full h-full inset-0 rounded-md">
        <div
          style={{ backgroundImage: `url("${src}")` }}
          className={`img-hover-effect-img w-full h-full shadow-2xl transition-all duration-700 scale-100 bg-center bg-cover inset-0`}
        />
      </div>

      <div className="mt-4 relative z-20 md:mt-0 flex flex-col items-start lg:w-9/12">
        <SmallButton text={label} isLink={true} href={href} className={``} />

        <Link href={href}>
          <MainTitle text={title} className="mt-4 cursor-pointer text-white" />
        </Link>
        <div className="inline-flex items-center mt-4">
          <span className="inline-flex mr-4 items-center text-white font-bold">
            <User />
            <span className="uppercase ml-2">BY {user_name}</span>
          </span>

          <span className="inline-flex items-center text-white font-bold">
            <Calendar />
            <span className="uppercase ml-2">{date}</span>
          </span>
        </div>
      </div>
    </div>
  );
};
