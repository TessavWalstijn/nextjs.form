import React from 'react'
import {
  Hr,
} from './styled'

export interface Props {}

const HR: React.FC<Props> = ({ children, ...other }) => {
  return <Hr children={children} {...other} />
}

export default HR;