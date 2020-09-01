import React from 'react'
import Card from '../card/'
import StyledCharacterList from './styled'
import { useParams } from 'react-router-dom'

const CharacterList = ({characters, onSelect = () => {} }) => {

  return(
    <StyledCharacterList >
      {characters.map((character, index) => 
      <Card 
        onClick={() => {
          onSelect(character)
        }} 
        key={index} 
        image={character.image} 
        title={character.name} /> )}
    </StyledCharacterList>
  )
}

export default CharacterList