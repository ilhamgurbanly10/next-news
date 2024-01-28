import React from "react";
import { Props } from "./type";
import MainTitle from "@/shared/ui/MainTitle";
import Container from "@/shared/ui/Container";
import MainText from "@/shared/ui/MainText";
import RoundedCard from "@/shared/ui/RoundedCard";
import useRecoil from "@/shared/state/useRecoil";
import { WeeklyBestRecipe } from "@/shared/state/type";
import Loader from "@/shared/ui/Loader";
import Error from "@/shared/ui/Error";
import Section from "@/shared/ui/Section";
import Button from "@/shared/ui/Buttons/Button";
import { useTranslation } from "next-i18next";
import { Right } from "@/shared/icons";
import Underline from "@/shared/ui/Underline";

export const UI: React.FC<Props> = ({ className }) => {
  const { weeklyBestRecipes: data } = useRecoil();
  const { t } = useTranslation("common");
  return (
    <Container>
      <Section className={`mt-14 ${className ? className : ""}`}>
        <div className="w-full py-14 flex flex-col">
          <div className="flex flex-col lg:flex-row items-center justify-between">
            <MainTitle text="weekly_best_recipes" className="" />
            <Button
              text={
                <span className="inline-flex items-center">
                  <span className="mr-2">{t("view_all")}</span>
                  <Right />
                </span>
              }
              isLink={true}
              type="secondary"
              href="/"
              className={`mt-4 w-64 lg:w-auto lg:mt-0 py-1.5`}
            />
          </div>

          <Underline />

          <div className="flex flex-col lg:flex-row mt-8">
            <div className="w-full lg:w-6/12 lg:pr-4">Left</div>

            <div className="w-full lg:w-6/12 lg:pl-4 mt-6 lg:mt-0">Right</div>
          </div>

          <Loader
            show={data.loading}
            className="text-2xl mt-8"
            showText={true}
          />

          <Error
            show={!data.loading && data.error}
            className="text-2xl mt-8"
            showText={true}
          />

          {/* {!data.loading && !data.error && (
            <div className="w-full flex gap-4 flex-wrap items-center justify-between mt-8">
              {data?.data?.map((data: WeeklyBestRecipe, i: number) => (
                <RoundedCard
                  key={i}
                  href={data.href}
                  src={data.src}
                  label={data.label}
                />
              ))}
            </div>
          )} */}
        </div>
      </Section>
    </Container>
  );
};
