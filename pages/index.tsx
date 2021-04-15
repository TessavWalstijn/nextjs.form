import { useEffect } from 'react'
import { ThemeProvider } from 'styled-components'
import Head from 'next/head'
import H from '@react/components/Typography/Header'
import P from '@react/components/Typography/Paragraph'
import Container from '@react/components/Container'
import NavBar from '@react/components/NavBar'
import Form from '@react/components/Form'
import MainButton from '@react/components/Buttons/MainButton/index'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faInfoCircle } from '@fortawesome/free-solid-svg-icons'
import getThemeFromCookie from '@utils/getThemeFromCookie'

library.add(faInfoCircle);

const Home = (data: any) => {
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
          <MainButton link='./about' icon='info-circle' themed={currentTheme} text='About' onlySolid />
        ]} />
        <Container>
          <H variant="h1">{data.title}</H>
          <P>{data.text}</P>
          <Form />
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
