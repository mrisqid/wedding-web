import Head from 'next/head'
import '@/styles/globals.css'

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>
          Fadlan & Pipi: Undangan Akad
        </title>
      </Head>
      <Component {...pageProps} />
    </>
  )
}
