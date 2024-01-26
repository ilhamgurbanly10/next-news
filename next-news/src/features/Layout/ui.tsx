import React from "react";
import { Props } from "./type";
import Header from "@/features/Header";
import Footer from "@/features/Footer";
import FixedHeader from "@/shared/ui/FixedHeader";
import BackToTopBtn from "@/shared/ui/BackToTopBtn";

export const UI: React.FC<Props> = ({ children }) => {
  return (
    <>
      <Header />
      <FixedHeader>
        <Header />
      </FixedHeader>
      <main className="main">{children}</main>
      <Footer />
      <BackToTopBtn />
    </>
  );
};
