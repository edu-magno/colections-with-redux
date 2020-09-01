import React from 'react'
import StyledButton from './styled'

const Button = ({onClick, buttonTitle, className}) => {
  return(
    <StyledButton onClick={onClick} className={className}>{buttonTitle}</StyledButton>
  )
}

export default Button