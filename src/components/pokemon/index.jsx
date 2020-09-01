import React, { useEffect } from 'react'
import CharacterList from '../character-list/'
import { getPokemons } from '../../utils/get-characters'
import { addCaracterList } from '../../redux/actions'
import { useDispatch, useSelector } from 'react-redux'

const Pokemon = () => {

  const dispatch = useDispatch()
  const page = useSelector((state) => state.page.page)
  const characterList = useSelector((state) => state.characterList.characterList)

  useEffect(() => {
    const getPoke = async () => {
      const response = await getPokemons(page)
      dispatch(addCaracterList(response))
    }
    getPoke()
  },[])

  useEffect(() => {
    const getPoke = async () => {
      const response = await getPokemons(page)
      dispatch(addCaracterList(response))
    }
    getPoke()
  },[page])

  return(
    <CharacterList characters={characterList} />
  )
}

export default  Pokemon