import { DefaultTheme } from 'styled-components'
import baseTheme from './base'

const mainTheme: DefaultTheme = {
  ...baseTheme,
  colors: {
    primary: '#F4F3EE',
    secondary: '#8A817C',
    highlight: '#BCB8B1',
    lowlight: '#463F3A',
  },
}

export default mainTheme
