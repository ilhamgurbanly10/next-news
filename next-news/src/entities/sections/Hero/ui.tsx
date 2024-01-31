import React from "react";
import { Props } from "./type";
import Container from "@/shared/ui/Container";
import HeroCard from "@/shared/ui/HeroCard";
import useRecoil from "@/shared/state/useRecoil";
import { HeroItem } from "@/shared/state/type";
import Loader from "@/shared/ui/Loader";
import Error from "@/shared/ui/Error";
import Section from "@/shared/ui/Section";
import ResponsiveSlider from "@/shared/ui/Sliders/ResponsiveSlider";

export const UI: React.FC<Props> = ({ className }) => {
  const { hero: data } = useRecoil();
  return (
    <Container>
      <Section className={`mt-14 ${className ? className : ""}`}>
        <div>
          {!data.loading && !data.error && (
            <ResponsiveSlider>
              {data?.data?.map((data: HeroItem, i: number) => (
                <div key={i}>
                  <HeroCard
                    href={data.href}
                    src={data.src}
                    label={data.label}
                    title={data.title}
                    user_name={data.user_name}
                    date={data.date}
                  />
                </div>
              ))}
            </ResponsiveSlider>
          )}
        </div>
        <div className="w-full py-14 flex flex-col items-center">
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
        </div>
      </Section>
    </Container>
  );
};
