import '@/shared/styles/globals.css'
import '@/shared/styles/globals.scss'
import { appWithTranslation } from 'next-i18next'
import Layout from 'entities/Layout'

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}

export default appWithTranslation(MyApp)
