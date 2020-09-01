export const add = (newCharacter) => ({
  type: 'ADD',
  newCharacter
})

export const addCaracterList = (response) => ({
  type: 'ADDCHARACTERLIST',
  response
})

export const previous = () => ({
  type: 'PREVIOUS',
})

export const next = () => ({
  type: 'NEXT',
})

export const resetPage = (initialPage) => ({
  type:'RESETPAGE',
  initialPage
})