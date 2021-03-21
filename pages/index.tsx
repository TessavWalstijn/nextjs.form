import cookie from 'js-cookie'
import { useEffect, useState } from 'react'
import { ThemeProvider } from 'styled-components'
import Head from 'next/head'
import { main, light } from '@react/themes'
import H from '@react/components/Typography/Header'
import P from '@react/components/Typography/Paragraph'
import Container from '@react/components/Container'
import NavBar from '@react/components/NavBar'

const Home = (data: any) => {

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

  useEffect(() => {
    if (process.browser) {
      const theme: string | undefined = cookie.get('nextjs-form-theme')

      if (theme === 'light' || theme === 'dark') {
        handleTheme(theme);
      } else {
        cookie.set('nextjs-form-theme', 'dark')
      }
    }
  }, [currentTheme])

  return (
    <>
      <Head>
        <style>{`body { background-color: ${currentTheme.colors.lowlight} }`}</style>
      </Head>
      <ThemeProvider theme={currentTheme}>
        <Container>
          <NavBar handleTheme={handleTheme} themed={currentTheme} buttons={[
            
          ]} />
          <H variant="h1">{data.title}</H>
          <P>{data.text}</P>
        </Container>
      </ThemeProvider>
    </>
  );
}

export async function getStaticProps() {

  // Dummy data
  const page = {
    title: "App",
    text: "Awesome app text here"
  }

  return {
    props: page,
    revalidate: 1200,
  }
}

export default Home;
