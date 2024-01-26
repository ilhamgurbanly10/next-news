import React from "react";
import Head from "@/shared/ui/Head";
import { useTranslation } from "next-i18next";
import { Props } from "./type";

export const UI: React.FC<Props> = ({}) => {
  const { t } = useTranslation("common");

  return (
    <>
      <Head
        title={t("title")}
        metaTitle={t("metaTitle")}
        metaDescription={t("metaDescription")}
      />

      <div style={{ width: "200px", height: "5000px", backgroundColor: "red" }}>
        Hello
      </div>
    </>
  );
};
