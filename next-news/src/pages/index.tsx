import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { useTranslation } from 'next-i18next'
import Head from '@/shared/ui/Head';

export default function Home() {

  const { t } = useTranslation('common');

  return (
    <>
    <Head title={t('title')} metaTitle={t('metaTitle')} metaDescription={t('metaDescription')} />
      {/* <h1 className='bg-red-500 text-custom-blue my-container'>Hello</h1>
      <h2 className='scss-container bg-red-500'>{process.env.NEXT_PUBLIC_PRIVATE_KEY}</h2>
      <Button type="primary">Button</Button>
      <p>{t('hello')}</p> */}
    </>
  )
}

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, [
        'common',
      ])),
      // Will be passed to the page component as props
    },
  }
}
