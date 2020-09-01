import React, { useEffect } from 'react'
import CharacterList from '../character-list/'
import { getCharactersRickAndMorty } from '../../utils/get-characters'
import { useSelector, useDispatch} from 'react-redux'
import { addCaracterList } from '../../redux/actions'

const RickAndMorty = () => {
  
  const dispatch = useDispatch()
  const characterList = useSelector((state) => state.characterList.characterList)
  const page = useSelector((state) => state.page.page)

  useEffect(() => {
    const getRickAndMorty = async () => {
      const response = await getCharactersRickAndMorty(page)
      dispatch(addCaracterList(response.data.results))
    }
    getRickAndMorty()
  },[])

  useEffect(() => {
    const getRickAndMorty = async () => {
      const response = await getCharactersRickAndMorty(page)
      dispatch(addCaracterList(response.data.results))
    }
    getRickAndMorty()
  },[page])


  return(
    <CharacterList characters={characterList} />
  )
}

export default RickAndMorty