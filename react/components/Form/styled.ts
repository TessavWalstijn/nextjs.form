import styled from 'styled-components'
import { space, color, typography, layout } from 'styled-system'

export const Row = styled.div`
  display: flex;
  justify-content: space-between;

  ${typography}
  ${space}
  ${color}
  ${layout}
`
