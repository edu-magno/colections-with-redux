import React, { useState } from 'react'
import { useHistory, useParams } from 'react-router-dom'
import Pokemon from '../../components/pokemon'
import { notification } from 'antd'
import { useDispatch, useSelector } from 'react-redux'
import { add, next, previous, resetPage } from '../../redux/actions'
import Button from '../../components/button/'
import StyledCharacters from './styled'
import RickAndMorty from '../../components/rick-and-morty'

const Characters = () => {

  const { list } = useParams()
  const history = useHistory()

  const dispatch = useDispatch()
  const page = useSelector((state) => state.page.page)

  const handleCharacters = async () => {
    if (list === 'rick-and-morty') {
      dispatch(resetPage(1))
      history.push('/characters/pokemons')
    }else {
      dispatch(resetPage(1))
      history.push('/characters/rick-and-morty')
    }
  }

  const handlePreviousPage = () => {
    if (page > 1 ) {
      dispatch(previous())
    }
  }

  const handleNextPage = () => {
    dispatch(next())
  }

  return(
    <StyledCharacters>
      <Button onClick={handleCharacters} buttonTitle={list === 'pokemons' ? 'Rick And Morty' : 'Pokemon'}/>
      <div>
        <Button onClick={handlePreviousPage} buttonTitle={'Previous'}/>
        <Button onClick={handleNextPage} buttonTitle='Next'/>
      </div>
      {list === 'pokemons' && <Pokemon />}
      {list === 'rick-and-morty' && <RickAndMorty />}
    </StyledCharacters>
  )
}

export default Characters