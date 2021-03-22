import cookie from 'js-cookie'
import { useEffect, useState } from 'react'
import { ThemeProvider } from 'styled-components'
import Head from 'next/head'
import { main, light } from '@react/themes'
import Container from '@react/components/Container'
import NavBar from '@react/components/NavBar'
import StyledMarkdown from '@react/components/StyledMarkdown'
import MainButton from '@react/components/Buttons/MainButton/index'
import fs from 'fs'
import path from 'path'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faHome } from '@fortawesome/free-solid-svg-icons'

library.add(faHome);

const About = (data: any) => {
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
        <NavBar handleTheme={handleTheme} themed={currentTheme} buttons={[
          <MainButton link='./' icon='home' themed={currentTheme} text='Home' onlySolid />
        ]} />
        <Container pb={65}>
          <StyledMarkdown text={data.markdown} />
        </Container>
      </ThemeProvider>
    </>
  );
}

export async function getStaticProps() {
  let data = new Promise((res) => {
    fs.readFile(path.resolve(__dirname, '../../../README.md'), { encoding: 'utf-8' }, (error, markdown) => {
      if (error) return res({
        markdown: error
      })

      res({
        markdown
      })
    });
  })

  return {
    props: await data,
    revalidate: 1200,
  }
}

export default About;
