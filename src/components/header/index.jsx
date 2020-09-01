import React from 'react'
import { Link } from 'react-router-dom'
import { AiOutlineHome, AiOutlinePieChart } from 'react-icons/ai'
import { BsPeople } from 'react-icons/bs'
import StyledHeader from './styled'

const Header = ({className}) => {
  return(
    <StyledHeader className={className}>
      <nav>
            <Link to='/'>
              <AiOutlineHome size='3rem' className='home'/>
            </Link>
            <Link to='/characters/pokemons'>
              <BsPeople size='3rem' className='characters'/>
            </Link>
            <Link to='/chart'>
              <AiOutlinePieChart size='3rem' className='chart'/>
            </Link>
      </nav>
    </StyledHeader>
  )
}

export default Header