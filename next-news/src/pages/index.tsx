import Head from 'next/head'
import Image from 'next/image'
import { Button } from 'antd';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { useTranslation } from 'next-i18next'

export default function Home() {

  const { t } = useTranslation('common');

  return (
    <div>
      <h1 className='bg-red-500 text-custom-blue my-container'>Hello</h1>
      <h2 className='scss-container bg-red-500'>{process.env.NEXT_PUBLIC_PRIVATE_KEY}</h2>
      <Button type="primary">Button</Button>
      <p>{t('hello')}</p>
    </div>
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
