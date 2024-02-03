import React from "react";
import { Props, Path, Link as LinkType } from "./type";
import useModel from "./model";
import Container from "@/shared/ui/Container";
import Section from "@/shared/ui/Section";
import TextButton from "@/shared/ui/Buttons/TextButton";
import Image from "@/shared/ui/Image";
import Link from "next/link";
import { paths } from "./data";
import Title from "@/shared/ui/Title";

export const UI: React.FC<Props> = ({}) => {
  const { greeting } = useModel();

  return (
    <footer className="footer w-full bg-primary-black mt-14">
      <Container>
        <Section>
          <div className="pt-6 pb-16 flex flex-col lg:flex-row items-center justify-start text-center lg:text-start">
            <div className="w-full lg:w-72 lg:mr-12">
              <div className="flex justify-center lg:justify-start">
                <Link href="/">
                  <Image
                    className="brand"
                    width={171}
                    height={50}
                    alt={"brand"}
                    src="https://themegenix.net/html/zaira/assets/img/logo/w_logo.png"
                  />
                </Link>
              </div>

              <p className="mt-4 text-secondary-blue text-md leading-8">
                Browned Butter And Brown Sugar Caramelly Goodness, Crispy Edges
                Thick And Soft Centers And Melty Little Puddles Of Chocolate.
              </p>
            </div>
            {paths?.map((path: Path, i: number) => (
              <div
                key={i}
                className="flex flex-col lg:w-2/12 items-center lg:items-start mt-4 text-center lg:text-start lg:mt-0"
              >
                <Title
                  text={path?.title}
                  className="text-white mb-2"
                  leftUnderline={true}
                />
                {path?.data?.map((data: LinkType, y: number) => (
                  <TextButton
                    key={`${i}_${y}`}
                    href={data.href}
                    colorClassName={"text-secondary-blue"}
                    colorClassNameOnHover={"text-secondary-blue"}
                    text={data.label}
                    className="mt-2 text-lg font-light"
                    underline={true}
                  />
                ))}
              </div>
            ))}
          </div>
        </Section>
        <Section className="border-t border-secondary-blue">
          <div className="py-6 flex flex-col items-center lg:flex-row justify-between">
            <div className="flex items-center flex-col lg:flex-row">
              <TextButton
                href={"/"}
                colorClassName={"text-secondary-blue"}
                colorClassNameOnHover={"text-secondary-blue"}
                text={"Privacy Policy & Terms"}
                className="lg:mr-3 text-lg font-light opacity-80"
                underline={true}
              />

              <span className="opacity-80 bg-secondary-blue w-1 h-1 rounded-full hidden lg:block" />

              <TextButton
                href={"/"}
                colorClassName={"text-secondary-blue"}
                colorClassNameOnHover={"text-secondary-blue"}
                text={"Site Credits"}
                className="lg:ml-3 mt-1 lg:mt-0 text-lg font-light opacity-80"
                underline={true}
              />
            </div>

            <div className="text-secondary-blue opacity-80 mt-4 lg:mt-0 text-center lg:text-start">
              © {new Date().getFullYear()} All Rights Reserved
              <br />
              By Ilham Gurbanly
            </div>
          </div>
        </Section>
      </Container>
    </footer>
  );
};
