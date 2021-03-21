import { DefaultTheme } from 'styled-components'
import baseTheme from './base'

const mainTheme: DefaultTheme = {
  ...baseTheme,
  type: 'light',
  colors: {
    primary: '#8A817C',
    secondary: '#F4F3EE',
    highlight: '#463F3A',
    lowlight: '#BCB8B1',
  },
}

export default mainTheme
