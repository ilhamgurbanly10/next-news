import "@/shared/styles/globals.css";
import "@/shared/styles/globals.scss";
import { appWithTranslation } from "next-i18next";
import Layout from "features/Layout";
import { RecoilRoot } from "recoil";

const MyApp = ({ Component, pageProps }) => {
  return (
    <RecoilRoot>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </RecoilRoot>
  );
};

export default appWithTranslation(MyApp);
