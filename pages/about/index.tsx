import { useEffect } from 'react'
import { ThemeProvider } from 'styled-components'
import Head from 'next/head'
import Container from '@react/components/Container'
import NavBar from '@react/components/NavBar'
import StyledMarkdown from '@react/components/StyledMarkdown'
import MainButton from '@react/components/Buttons/MainButton/index'
import fs from 'fs'
import path from 'path'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faHome } from '@fortawesome/free-solid-svg-icons'
import getThemeFromCookie from '@utils/getThemeFromCookie'

library.add(faHome);

const About = (data: any) => {
  const { currentTheme, handleTheme } = data;
  const updateThemeCookie = getThemeFromCookie(handleTheme);

  useEffect(updateThemeCookie, [currentTheme])

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
