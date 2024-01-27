import React from "react";
import { Props } from "./type";
import { useTranslation } from "next-i18next";
import Link from "next/link";
import styles from "./styles.module.scss";

export const UI: React.FC<Props> = ({ className, src, label, href }) => {
  const { t } = useTranslation("common");
  return (
    <Link href={href}>
      <div
        className={`${
          styles.roundedCard
        } rounded-card overflow-hidden cursor-pointer inline-flex items-center justify-center relative w-40 h-40 lg:w-48 lg:h-48 rounded-full border border-4 border-white mx-auto ${
          className ? className : ""
        }`}
      >
        <div
          style={{ backgroundImage: `url("${src}")` }}
          className={`${styles.roundedCardImg} transition-all duration-700 scale-100 bg-center bg-cover absolute inset-0`}
        />
        <div
          className={`${styles.roundedCardOverlay} transition-all z-10 duration-700 rounded-full absolute inset-0 bg-overlay-light`}
        />
        <h3 className="text-white z-20 bg-primary-orange font-medium text-sm uppercase px-3 py-1 rounded absolute">
          {t(label)}
        </h3>
      </div>
    </Link>
  );
};
