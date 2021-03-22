import React, { forwardRef, useState } from 'react'
import {
  InputStyled,
  Warn,
  Error,
  Container
} from './styled'
import StyledProps from '@react/props/StyledProps'
import debounce from '@utils/debounce';

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

    const handleKeyUp = debounce(() => {
      const input = ref.current

      if (!input) return

      if (require && input.value === '' && feedback !== Feedback.required) {
        return setFeedback(Feedback.required)
      }

      onCheck(input.value, setFeedback)
    }, 300)

    console.log(readonly)

    return <Container {...other}>
      <InputStyled
        ref={ref}
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
