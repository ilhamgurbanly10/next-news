import React from "react";
import { Props } from "./type";
import Section from "@/shared/ui/Section";
import MainTitle from "@/shared/ui/MainTitle";
import GetDailyFoodForm from "@/features/forms/GetDailyFoodForm";
import Container from "@/shared/ui/Container";

export const UI: React.FC<Props> = ({ className }) => {
  return (
    <Container>
      <Section className={`mt-14 ${className ? className : ""}`}>
        <div className="px-4 w-full bg-blues-100 lg:px-24 py-14 rounded flex flex-col lg:flex-row items-center justify-between">
          <MainTitle
            text="get_daily_food"
            className="w-full lg:w-3/12 text-center lg:text-start"
          />
          <GetDailyFoodForm className="mt-4 lg:mt-0" />
        </div>
      </Section>
    </Container>
  );
};
