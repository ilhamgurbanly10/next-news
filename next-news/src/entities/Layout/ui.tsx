import React from "react";
import { Props } from "./type";
import Header from "@/entities/Header";
import Footer from "@/entities/Footer";
import FixedHeader from "@/shared/ui/FixedHeader";
import BackToTopBtn from "@/shared/ui/BackToTopBtn";
import MainLoader from "@/shared/ui/MainLoader";
import { useLoading } from "@/shared/hooks";

export const UI: React.FC<Props> = ({ children }) => {
  const { loading } = useLoading();

  return (
    <>
      <Header />
      <FixedHeader>
        <Header />
      </FixedHeader>
      <main className="main">{children}</main>
      <Footer />
      <BackToTopBtn />
      <MainLoader show={loading.state} />
    </>
  );
};
