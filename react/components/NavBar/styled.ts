import styled from 'styled-components'
import { space, color, typography, layout } from 'styled-system'
import StyledProps from '@react/props/StyledProps'

export const Nav = styled.nav<StyledProps>`
  background-color: ${(props) => props.theme.colors.lowlight};
  color: ${(props) => props.theme.colors.highlight};
  position: fixed;
  display: flex;
  align-content: center;
  justify-content: center;
  border-top: solid 1px ${(props) => props.theme.colors.highlight};
  box-shadow: 0px -3px ${(props) => props.theme.colors.lowlight};
  bottom: 0px;
  padding: 10px 0px;
  left: 0px;
  width: 100%;

  @media (min-width: 50rem) {
    bottom: unset;
    flex-direction: column;
    background-color: transparent;
    width: unset;
    border-top: unset;
    padding: 0;
  }

  ${typography}
  ${space}
  ${color}
  ${layout}
`

export const Item = styled.div<StyledProps>`
  margin-left: 0rem;

  @media (min-width: 50rem) {
    margin-top: 1rem;
    margin-left: 1rem;
  }

  ${typography}
  ${space}
  ${color}
  ${layout}
`
