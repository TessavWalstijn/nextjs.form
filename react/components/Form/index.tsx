import React from 'react'
import StyledProps from '@react/props/StyledProps'
import Input, { Feedback } from '@react/components/Input'
import RegExpLib from '@utils/regExpLib'
import { FullName } from './styled'

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

  const checkInitials = (value: string, setFeedback: any) => {
    if (RegExpLib.checkInitials(value)) {
      return setFeedback(Feedback.regular)
    }

    return setFeedback(Feedback.warn)
  }

  const checkName = (value: string, setFeedback: any) => {
    if (RegExpLib.checkName(value)) {
      return setFeedback(Feedback.regular)
    }

    return setFeedback(Feedback.warn)
  }

  return <>
    <FullName>
      <Input
        onCheck={checkInitials}
        error="Invalid initials"
        warn="Invalid initials"
        require="Sorry but initial(s) is/are required"
        placeholder="Initials"
        width={'15%'}
      />
      <Input
        onCheck={checkName}
        error="Invalid insertion"
        warn="Invalid insertion"
        placeholder="Initials"
        width={'30%'}
      />
      <Input
        onCheck={checkName}
        error="Invalid last name"
        warn="Invalid last name"
        require="Sorry but initial(s) is/are required"
        placeholder="Initials"
        width={'auto'}
      />
    </FullName>
    <Input
      onCheck={checkEmail}
      error="Email address already has an account here"
      warn="Invalid email address"
      require="Sorry but email address is required"
      placeholder="email@example.com"
    />
  </>
}

export default Form;
