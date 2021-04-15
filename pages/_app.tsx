import Head from 'next/head'
import { AppProps } from 'next/app'
import { useState } from 'react'
import cookie from 'js-cookie'
import { main, light } from '@react/themes'

function MyApp({ Component, pageProps }: AppProps) {
  const [currentTheme, setCurrentTheme] = useState(main)

  const handleTheme = (theme: 'dark' | 'light') => {
    cookie.set('nextjs-form-theme', theme, { SameSite: "Strict" })
    switch (theme) {
      case 'dark':
        setCurrentTheme(main)
        break;
      case 'light':
        setCurrentTheme(light)
        break;
    }
  }

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0"></meta>
      </Head>
      <Component currentTheme={currentTheme} handleTheme={handleTheme} {...pageProps} />
    </>
  )
}

export default MyApp