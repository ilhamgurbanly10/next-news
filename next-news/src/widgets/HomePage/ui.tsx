import React, { useEffect } from "react";
import Head from "@/shared/ui/Head";
import { useTranslation } from "next-i18next";
import { Props } from "./type";
import GetDailyFood from "@/entities/sections/GetDailyFood";
import TopCategories from "@/entities/sections/TopCategories";
import WeeklyBestRecipes from "@/entities/sections/WeeklyBestRecipes";
import Hero from "@/entities/sections/Hero";
import { useRecoilState } from "recoil";
import { sloganState } from "@/shared/state/atoms";

export const UI: React.FC<Props> = ({}) => {
  const { t } = useTranslation("common");

  const [sloganR, setSloganR] = useRecoilState<string>(sloganState);

  useEffect(() => {
    console.log(sloganR);
  }, []);
  return (
    <>
      <Head
        title={t("title")}
        metaTitle={t("metaTitle")}
        metaDescription={t("metaDescription")}
      />

      <Hero />
      <GetDailyFood />
      <TopCategories />
      <WeeklyBestRecipes />
    </>
  );
};
