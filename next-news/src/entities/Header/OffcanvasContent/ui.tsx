import React, { useEffect } from "react";
import { useTranslation } from "next-i18next";
import { Props } from "./type";
import { Close, Marker, Phone, Envelope } from "@/shared/icons";
import Image from "@/shared/ui/Image";
import Link from "next/link";
import useRecoil from "@/shared/state/useRecoil";
import Loader from "@/shared/ui/Loader";
import Error from "@/shared/ui/Error";
import TextButton from "@/shared/ui/Buttons/TextButton";
export const UI: React.FC<Props> = ({ className, setShow }) => {
  const { t } = useTranslation("common");
  const { info } = useRecoil();

  useEffect(() => {}, []);

  return (
    <div
      className={`header-offcanvas-content relative ${
        className ? className : ""
      }`}
    >
      <button
        type="button"
        className="bg-primary-orange rounded-full text-center inline-flex justify-center items-center text-2xl w-12 h-12 absolute top-0 right-0 text-white transition-all hover:bg-primary-blue"
        onClick={() => {
          setShow(false);
        }}
      >
        <Close />
      </button>

      <div className="flex flex-col pt-16">
        <Link href="/">
          <Image
            className="brand"
            width={171}
            height={50}
            alt={"brand"}
            src="https://themegenix.net/html/zaira/assets/img/logo/logo.png"
          />
        </Link>

        <Loader show={info.loading} className="text-2xl mt-6" showText={true} />

        <Error
          show={!info.loading && info.error}
          className="text-2xl mt-6"
          showText={true}
        />

        {!info.loading && !info.error && (
          <div>
            <p className="mt-4 text-gray-500 leading-7 w-11/12">
              {info.data?.title}
            </p>

            <div className="flex justify-between mt-10 flex-wrap w-11/12">
              {info.data?.images?.map((item: string, i: number) => (
                <div
                  key={i}
                  className="cursor-pointer rounded overflow-hidden mb-3"
                >
                  <Image
                    width={86}
                    height={70}
                    alt={item}
                    src={item}
                    loadingText={false}
                    errorText={false}
                  />
                </div>
              ))}
            </div>

            <div className="mt-6">
              <h2 className="text-primary-blue font-bold text-2xl">
                {t("get_in_touch")}
              </h2>

              <div className="mt-4">
                <div className="mt-4 flex items-center">
                  <span className="mr-3 text-lg w-6">
                    <Envelope color={"#6D757F"} />
                  </span>{" "}
                  <TextButton
                    colorClassName="text-primary-grey"
                    href={"/"}
                    text={"info@nextnews.com"}
                    className="text-lg"
                  />
                </div>

                <div className="mt-4 flex items-center">
                  <span className="mr-3 text-lg w-6 text-primary-grey">
                    <Phone />
                  </span>{" "}
                  <TextButton
                    colorClassName="text-primary-grey"
                    href={"/"}
                    text={"+994551234567"}
                    className="text-lg"
                  />
                </div>

                <div className="mt-4 flex items-center">
                  <span className="mr-3 text-lg w-6">
                    <Marker color={"#6D757F"} />
                  </span>{" "}
                  <TextButton
                    colorClassName="text-primary-grey"
                    href={"/"}
                    text={"Baku, Azerbaijan"}
                    className="text-lg"
                  />
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
