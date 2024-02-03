import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import HomePage from "@/widgets/HomePage";
import type { GetStaticProps, NextPage } from "next";
import { Home } from "@/shared/types/pages";
import { RecoilRoot } from "recoil";
import Layout from "@/entities/Layout";
import { infoState } from "@/shared/state/atoms";
import { getInfo } from "@/shared/utils/get/general";
import { InfoAtom } from "@/shared/state/type";

const Index: NextPage<Home> = ({ info }) => {
  const initializeState = ({ set }): void => {
    set(infoState, info);
  };

  return (
    <RecoilRoot initializeState={initializeState}>
      <Layout>
        <HomePage />
      </Layout>
    </RecoilRoot>
  );
};

export const getStaticProps: GetStaticProps<Home> = async ({ locale }) => {
  let info: InfoAtom = { data: null, error: false, loading: true };
  info = await getInfo();

  return {
    props: {
      ...(await serverSideTranslations(locale as string, ["common"])),
      info,
    },
    revalidate: 1000000,
  };
};

export default Index;
