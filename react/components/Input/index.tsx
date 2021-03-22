import React, { forwardRef, useState, useRef } from 'react'
import {
  InputStyled,
  Warn,
  Error,
  Container
} from './styled'
import StyledProps from '@react/props/StyledProps'
import debounce from '@utils/debounce'
import mergeRefs from '@utils/mergeRefs'

export enum Feedback {
  regular = 'regular',
  error = 'error',
  warn = 'warning',
  required = 'required'
}

interface Props extends StyledProps {
  onCheck: (value: string, setFeedback: any) => void,
  warn: string
  ref?: any,
  error?: string
  require?: string | boolean
  placeholder: string
  readonly?: boolean
}

const Input: React.FC<Props> = forwardRef(
  ({ onCheck, error, warn, require, placeholder, readonly = false, ...other }, ref: any) => {
    const [feedback, setFeedback] = useState<Feedback>(Feedback.regular)
    const inputRef = useRef<HTMLInputElement | null>(null)

    const handleKeyUp = debounce(() => {
      let input
      if (ref) {
        input = ref.current
      } else if (inputRef) {
        input = inputRef.current
      }

      if (!input) return

      if (require && input.value === '' && feedback !== Feedback.required) {
        return setFeedback(Feedback.required)
      }

      onCheck(input.value, setFeedback)
    }, 300)

    return <Container {...other}>
      <InputStyled
        ref={mergeRefs(inputRef, ref)}
        placeholder={placeholder}
        onKeyUp={handleKeyUp}
        feedback={feedback}
        fontSize={0}
        type='text'
        readonly={readonly}
      />
      {feedback === 'warning' && <Warn>{warn}</Warn>}
      {feedback === 'error' && <Error>{error}</Error>}
      {feedback === 'required' && require && <Error>{require}</Error>}
    </Container>
  }
)

export default Input;
