const defaultState = { characterList: []}

const reducer = (state = defaultState, action) => {
  switch (action.type) {
    case 'ADDCHARACTERLIST':
      return {
        ...state,
        characterList : action.response
      }
    
    default:
      return state
  }
}

export default reducer