import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { space, color, typography, layout } from 'styled-system'
import { Link } from '@react/components/Typography/Link/styled'
import StyledProps from '@react/props/StyledProps'

export const Text = styled.div`
  display: none;
`

export const Button = styled.div<StyledProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  align-content: center;
  color: ${(props) => props.theme.colors.highlight};
  background-color: ${(props) => props.theme.colors.lowlight};
  border-radius: 1em;
  border: solid 0.1rem ${(props) => props.theme.colors.highlight};
  width: 2rem;
  height: 2rem;
  cursor: pointer;

  :hover {
    width: auto;
    padding: 0 1rem 0 0.6rem;

    ${Text} {
      margin-left: 0.5rem;
      display: inline;
    }
  }

  ${typography}
  ${space}
  ${color}
  ${layout}
`

export const Icon = styled(FontAwesomeIcon)`
  width: 0.9rem;
`

export const AA = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  align-content: center;
  flex-direction: row;
  color: ${(props) => props.theme.colors.highlight};

  :active {
    color: ${(props) => props.theme.colors.highlight};
    background-color: transparent;
  }

  :link {
    color: ${(props) => props.theme.colors.highlight};
  }

  :visited {
    color: ${(props) => props.theme.colors.highlight};
  }

  :hover {
    color: ${(props) => props.theme.colors.highlight};
    background-color: transparent;
  }
`
