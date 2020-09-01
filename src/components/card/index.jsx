import React from 'react'
import StyledCard from './styled'

const Card = ({ image, title, onClick, className }) => {
  return(
    <StyledCard onClick={onClick} className={className}>
      <img src={image} /> 
      <span>{title}</span>
    </StyledCard>
  )
}

export default Card