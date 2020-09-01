const defaultState = { charactersHome : []}

const reducer = (state = defaultState, action) => {
  switch (action.type) {
    case 'ADD':
      return {
        ...state,
        charactersHome : [...state.charactersHome, action.newCharacter]
      }

    default:
      return state;

  }
}

export default reducer