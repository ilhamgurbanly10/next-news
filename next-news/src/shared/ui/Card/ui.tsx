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
      className={`${
        styles.card
      } card inline-flex flex-col md:flex-row md:items-center ${
        className ? className : ""
      }`}
    >
      <Link href={href}>
        <div className="overflow-hidden w-40 h-32 lg:w-48 lg:h-40 rounded-md">
          <div
            style={{ backgroundImage: `url("${src}")` }}
            className={`${styles.cardImg} w-full h-full cursor-pointer shadow-2xl transition-all duration-700 scale-100 bg-center bg-cover inset-0`}
          />
        </div>
      </Link>

      <div className="mt-4 md:mt-0 flex flex-col items-start md:ml-6 md:w-8/12">
        <SmallButton text={label} isLink={true} href={href} className={``} />

        <Link href={href}>
          <MainTitle text={title} className="mt-4 cursor-pointer" />
        </Link>
        <div className="inline-flex items-center mt-4">
          <span className="inline-flex mr-4 items-center text-primary-grey font-bold">
            <User />
            <span className="uppercase ml-2">BY {user_name}</span>
          </span>

          <span className="inline-flex mr-4 items-center text-primary-grey font-bold">
            <Calendar />
            <span className="uppercase ml-2">{date}</span>
          </span>
        </div>
      </div>
    </div>
  );
};
