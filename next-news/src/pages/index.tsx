import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import HomePage from '@/widgets/HomePage';

const Index = () => {
  return <HomePage/>
}

export default Index;

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, [
        'common',
      ])),
    },
  }
}
