import React from 'react'
import { DefaultTheme } from 'styled-components'
import { Nav, Item } from './styled'
import ThemeButton from '@react/components/Buttons/ThemeButton'
import StyledProps from '@react/props/StyledProps'

export interface NavBarProps extends StyledProps {
  themed: DefaultTheme
  handleTheme: (theme: 'dark' | 'light') => void,
  buttons: any[]
}

const NavBar: React.FC<NavBarProps> = ({ handleTheme, themed, buttons = [], ...other }) => {
  let navigation = [<ThemeButton onClick={handleTheme} themed={themed} />];

  if (buttons.length !== 0) {
    navigation = [...buttons, ...navigation]
  }

  return (
    <Nav {...other}>
      {
        navigation.map((item, index) => {
          if (index === 0) {
            return (<Item key={index}>{item}</Item>)
          }

          return (<Item ml={1} key={index}>{item}</Item>)
        })
      }
    </Nav>
  );
}

export default NavBar