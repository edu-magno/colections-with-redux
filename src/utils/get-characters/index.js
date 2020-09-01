import axios from 'axios'

export const getCharactersRickAndMorty =  (page = 1) => {
  
  const response =  axios.get(`https://rickandmortyapi.com/api/character/?page=${page}`)
  
  return  response

}

export const getPokemons = async (page = 1) => {

  const result = []
  const response = await axios.get(`https://pokeapi.co/api/v2/pokemon?offset=${page * 20}&limit=20`)
  response.data.results.map(pokemon => {
    const id = pokemon.url.split('/').slice(6,7)
    result.push({name: pokemon.name, image : `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`})
  })
  return result
}

export const getPokemonsImage = async (id) => {

  const response = await axios.get(`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`)
}
