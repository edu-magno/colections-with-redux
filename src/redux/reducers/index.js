import { combineReducers } from 'redux'
import charactersHome from './characters-home'
import characterList from './character-list'
import page from './page'

export default combineReducers({ charactersHome, characterList, page })