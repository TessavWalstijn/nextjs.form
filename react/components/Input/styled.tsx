import styled, { css, StyledComponent, DefaultTheme } from 'styled-components'
import { motion, HTMLMotionProps, ForwardRefComponent } from 'framer-motion'
import { space, color, typography, layout, variant } from 'styled-system'
import StyledProps from '@react/props/StyledProps'
import P from '@react/components/Typography/Paragraph';

const feedback = variant({
  prop: 'feedback',
  variants: {
    warning: css`
      color: #ffc726;
      border: solid 0.1rem #ffc726;
    `,
    error: css`
      color: #db222a;
      border: solid 0.1rem #db222a;
    `,
  }
})

export const InputStyled: StyledComponent<
  ForwardRefComponent<HTMLInputElement, HTMLMotionProps<"input">>,
  DefaultTheme,
  { feedback: string } & StyledProps,
  never
> = styled(motion.input)`
  border-radius: 1rem;
  height: 1.6rem;
  margin: 0.2rem;
  padding: 0.2rem 0.5rem;
  color: ${(props) => props.theme.colors.highlight};
  border: solid 0.1rem ${(props) => props.theme.colors.highlight};
  background-color: ${(props) => props.theme.colors.lowlight};

  ${feedback}
  ${typography}
  ${space}
  ${color}
  ${layout}
`

export const Error = styled(P)`
  color: #db222a;
  font-size: 1rem;
  margin-top: -.2rem;
  margin-left: 1rem;
  font-weight: 300;
`

export const Warn = styled(P)`
  color: #ffc726;
  font-size: 1rem;
  margin-top: -.2rem;
  margin-left: 1rem;
  font-weight: 300;
` 
