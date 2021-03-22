import React, { useRef } from 'react'
import StyledProps from '@react/props/StyledProps'
import Input, { Feedback } from '@react/components/Input'
import RegExpLib from '@utils/regExpLib'
import debounce from '@utils/debounce'
import { Row } from './styled'

const Form: React.FC<StyledProps> = () => {
  const houseNumberRef = useRef<HTMLInputElement | null>(null)
  const postalcodeRef = useRef<HTMLInputElement | null>(null)
  const streetRef = useRef<HTMLInputElement | null>(null)
  const cityRef = useRef<HTMLInputElement | null>(null)

  const checkApi = debounce(async () => {
    const houseNumber = houseNumberRef.current
    const postalcode = postalcodeRef.current
    const streetInput = streetRef.current
    const cityInput = cityRef.current

    if (!(houseNumber && postalcode && streetInput && cityInput)) return

    const postcode = postalcode.value.replace(/[ ]/g, '');
    const housenum = houseNumber.value.replace(/[ ]/g, '');

    const res = await fetch(`https://photon.komoot.io/api?q=${postcode}%20${housenum}`)
    const location = await res.json();
    const { street, city } = location.features[0].properties;

    if (!(street && city)) return

    streetInput.value = street
    cityInput.value = city
  }, 1000)

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
        ref={null}
        onCheck={checkInitials}
        warn="Invalid initials"
        require="Sorry but initial(s) is/are required"
        placeholder="Initials"
        width={'15%'}
      />
      <Input
        ref={null}
        onCheck={checkName}
        warn="Invalid insertion"
        placeholder="Insertion"
        width={'30%'}
      />
      <Input
        ref={null}
        onCheck={checkName}
        warn="Invalid last name"
        require="Sorry but initial(s) is/are required"
        placeholder="Last name"
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
        ref={postalcodeRef}
        onCheck={checkPost}
        warn="Invalid postal code"
        require="Sorry but postal code is required"
        placeholder="3456 BC"
        width={'57%'}
      />
      <Input
        ref={houseNumberRef}
        onCheck={checkNumber}
        warn="Invalid house number"
        require="Sorry house number is required"
        placeholder="12 A"
        width={'40%'}
      />
    </Row>
    <Row>
      <Input
        ref={streetRef}
        onCheck={checkName}
        warn="Invalid street name"
        require="Sorry but street name is required"
        placeholder="Street name"
        width={'57%'}
        readonly
      />
      <Input
        ref={cityRef}
        onCheck={checkName}
        warn="Invalid city name"
        require="Sorry but city name is required"
        placeholder="City name"
        width={'40%'}
        readonly
      />
    </Row>
  </>
}

export default Form;
