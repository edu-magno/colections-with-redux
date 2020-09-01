const defaultState = { page: 1 }

const reducer = (state = defaultState, action) => {
  switch (action.type) {
    case 'NEXT':
      return {
        ...state,
        page : state.page + 1
      }
    
    case 'PREVIOUS':
      return {
        ...state,
        page : state.page -1
      }
    
    case 'RESETPAGE':
      return {
        ...state,
        page : action.initialPage
      }

    default:
      return state
  }
}

export default reducer