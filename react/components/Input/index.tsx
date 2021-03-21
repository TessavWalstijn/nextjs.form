import React, { useRef, useState } from 'react'
import {
  InputStyled,
  Warn,
  Error,
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
  onCheck: (value: string, setFeedback: any) => void
  error: string
  warn: string
  require: string | boolean
  placeholder: string
}

const Input: React.FC<Props> = ({onCheck, error, warn, require, placeholder, ...other }) => {
  const [feedback, setFeedback] = useState<Feedback>(Feedback.regular)
  const inputRef = useRef<HTMLInputElement | null>(null)

  const handleKeyUp = debounce(() => {
    const input = inputRef.current

    if (!input) return

    onCheck(input.value, setFeedback)
  }, 300)

  return <>
    <InputStyled ref={inputRef} placeholder={placeholder} onKeyUp={handleKeyUp} feedback={feedback} fontSize={0} type='text' {...other} />
    { feedback === 'warning' && <Warn>{warn}</Warn> }
    { feedback === 'error' && <Error>{error}</Error> }
    { feedback === 'required' && require && <Error>{require}</Error> }
  </>
}

export default Input;
