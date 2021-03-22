import styled from 'styled-components'
import ReactMarkdown from 'react-markdown'
import { space, color, typography, layout } from 'styled-system'
import StyledProps from '@react/props/StyledProps'

export const Markdown = styled(ReactMarkdown)<StyledProps>`
  div {
    display: flex;
    flex-direction: row;
    justify-content: space-between;

    a {
      width: calc(98% / 3);

      img {
        width: 100%;
        max-width: 21rem;
      }
    }
  }

  blockquote {
    border-left: 1px solid ${(props) => props.theme.colors.highlight};
    margin: 0 1rem 2rem 2.3rem;
  }

  ${typography}
  ${space}
  ${color}
  ${layout}
`
