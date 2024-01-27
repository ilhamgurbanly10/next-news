import React from "react";
import { Props } from "./type";
import MainTitle from "@/shared/ui/MainTitle";
import Container from "@/shared/ui/Container";
import MainText from "@/shared/ui/MainText";
import RoundedCard from "@/shared/ui/RoundedCard";
import useRecoil from "@/shared/state/useRecoil";
import { TopCategory } from "@/shared/state/type";
import Loader from "@/shared/ui/Loader";
import Error from "@/shared/ui/Error";

export const UI: React.FC<Props> = ({ className }) => {
  const { topCategories } = useRecoil();
  return (
    <Container className="mt-14">
      <div className="w-full bg-blues-100 py-14 px-8 lg:px-16 flex flex-col items-center">
        <MainTitle
          text="our_top_categories"
          className="w-full text-center"
          centerUnderline={true}
        />

        <MainText
          className="mt-4 w-full lg:w-5/12 text-center"
          text="top_categories_desc"
        />

        <Loader
          show={topCategories.loading}
          className="text-2xl mt-8"
          showText={true}
        />

        <Error
          show={!topCategories.loading && topCategories.error}
          className="text-2xl mt-8"
          showText={true}
        />

        {!topCategories.loading && !topCategories.error && (
          <div className="w-full flex gap-4 flex-wrap items-center justify-between mt-8">
            {topCategories?.data?.map((data: TopCategory, i: number) => (
              <RoundedCard
                key={i}
                href={data.href}
                src={data.src}
                label={data.label}
              />
            ))}
          </div>
        )}
      </div>
    </Container>
  );
};
