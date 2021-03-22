import React, { useRef } from 'react'
import StyledProps from '@react/props/StyledProps'
import Input, { Feedback } from '@react/components/Input'
import RegExpLib from '@utils/regExpLib'
import { Row } from './styled'

const Form: React.FC<StyledProps> = () => {
  const houseNumberRef = useRef<HTMLInputElement | null>(null)
  const postalcodeRef = useRef<HTMLInputElement | null>(null)

  const checkApi = async () => {
    const houseNumber = houseNumberRef.current
    const postalcode = postalcodeRef.current

    if (!(houseNumber && postalcode)) return

    const postcode = postalcode.value.replace(/[ ]/g, '');
    const housenum = houseNumber.value.replace(/[ ]/g, '');

    const res = await fetch(`https://photon.komoot.io/api?q=${postcode}%20${housenum}`)
    const location = await res.json();

    // API output
    console.log(location.features[0])
  }

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

  const checkPost = (value: string, setFeedback: any) => {
    // NOTE: This zip code check works only for dutch zip codes
    // INFO: The format /^(\d{4}[ ]?[A-Za-z]{2})$/
    if (/^(\d{4}[ ]?[A-Za-z]{2})$/.test(value)) {
      checkApi();
      return setFeedback(Feedback.regular)
    }

    return setFeedback(Feedback.warn)
  }
  
  const checkNumber = (value: string, setFeedback: any) => {
    // NOTE: This house number check is made for the duch house number format
    // INFO: The format /^([0-9]+)([ ]?([A-Za-z]+))?$/
    if (/^([0-9]+)([ ]?([A-Za-z]+))?$/.test(value)) {
      checkApi();
      return setFeedback(Feedback.regular)
    }

    return setFeedback(Feedback.warn)
  }

  return <>
    <Row>
      <Input
        onCheck={checkInitials}
        warn="Invalid initials"
        require="Sorry but initial(s) is/are required"
        placeholder="Initials"
        width={'15%'}
      />
      <Input
        onCheck={checkName}
        warn="Invalid insertion"
        placeholder="Initials"
        width={'30%'}
      />
      <Input
        onCheck={checkName}
        warn="Invalid last name"
        require="Sorry but initial(s) is/are required"
        placeholder="Initials"
        width={'49%'}
      />
    </Row>
    <Input
      onCheck={checkEmail}
      error="Email address already has an account here"
      warn="Invalid email address"
      require="Sorry but email address is required"
      placeholder="email@example.com"
    />
    <Row>
      <Input
        ref={houseNumberRef}
        onCheck={checkNumber}
        warn="Invalid house number"
        require="Sorry house number is required"
        placeholder="12 A"
        width={'30%'}
      />
      <Input
        ref={postalcodeRef}
        onCheck={checkPost}
        warn="Invalid postal code"
        require="Sorry but postal code is required"
        placeholder="3456 BC"
        width={'67%'}
      />
    </Row>
  </>
}

export default Form;
