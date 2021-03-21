import React from 'react'
import StyledProps from '@react/props/StyledProps'
import Input, { Feedback } from '@react/components/Input';
import RegExpLib from '@utils/regExpLib';

const Form: React.FC<StyledProps> = () => {
  const checkEmail = (value: string, setFeedback: any) => {

    if (RegExpLib.checkEmail(value)) {
      if (value === 'email@example.com') {
        // NOTE: This could be a database check
        return setFeedback(Feedback.error)
      } else {
        return setFeedback(Feedback.regular)
      }
    }

    return setFeedback(Feedback.warn)
  }

  return <Input
    onCheck={checkEmail}
    error="Email address already has an account here"
    warn="Invalid email address"
  />
}

export default Form;
