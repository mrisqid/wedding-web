import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="icon" href="/favicon.png" />
        <link rel='preconnect' href='https://fonts.gstatic.com' crossOrigin="true"  />
        <link rel="preload" href="https://fonts.googleapis.com/css2?family=Crimson+Pro:wght@400;700&family=Dancing+Script:wght@400;700&display=swap" as="style" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Crimson+Pro:wght@400;700&family=Dancing+Script:wght@400;700&display=swap" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
