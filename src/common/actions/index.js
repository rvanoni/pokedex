export const POKEMONS_RETRIEVE_REQUEST = 'POKEMONS_RETRIEVE_REQUEST'
export const POKEMONS_RETRIEVE_SUCCESS = 'POKEMONS_RETRIEVE_SUCCESS'
export const POKEMONS_RETRIEVE_FAILURE = 'POKEMONS_RETRIEVE_FAILURE'

export function pokemonsRetrieveRequest(data) {
  return { type: POKEMONS_RETRIEVE_REQUEST, data }
}

export function pokemonsRetrieveSuccess(data) {
  console.log('success', data)
  return {
    type: POKEMONS_RETRIEVE_SUCCESS,
    data,
  }
}

export function pokemonsRetrieveError(error) {
  return {
    type: POKEMONS_RETRIEVE_FAILURE,
    error,
  }
}
