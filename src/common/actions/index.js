export const POKEMONS_RETRIEVE_REQUEST = 'POKEMONS_RETRIEVE_REQUEST'
export const POKEMONS_RETRIEVE_SUCCESS = 'POKEMONS_RETRIEVE_SUCCESS'
export const POKEMONS_RETRIEVE_FAILURE = 'POKEMONS_RETRIEVE_FAILURE'

export function pokemonsRetrieveRequest(data) {
  return { type: POKEMONS_RETRIEVE_REQUEST, data }
}

export function pokemonsRetrieveSuccess(data) {
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

export const POKEMON_RESET_REQUEST = 'POKEMON_RESET_REQUEST'
export const POKEMON_RETRIEVE_REQUEST = 'POKEMON_RETRIEVE_REQUEST'
export const POKEMON_RETRIEVE_SUCCESS = 'POKEMON_RETRIEVE_SUCCESS'
export const POKEMON_RETRIEVE_FAILURE = 'POKEMON_RETRIEVE_FAILURE'

export function pokemonResetRequest() {
  return { type: POKEMON_RESET_REQUEST }
}

export function pokemonRetrieveRequest(data) {
  return { type: POKEMON_RETRIEVE_REQUEST, data }
}

export function pokemonRetrieveSuccess(data) {
  return {
    type: POKEMON_RETRIEVE_SUCCESS,
    data,
  }
}

export function pokemonRetrieveError(error) {
  return {
    type: POKEMON_RETRIEVE_FAILURE,
    error,
  }
}

export const POKEDEXES_RETRIEVE_REQUEST = 'POKEDEXES_RETRIEVE_REQUEST'
export const POKEDEXES_RETRIEVE_SUCCESS = 'POKEDEXES_RETRIEVE_SUCCESS'
export const POKEDEXES_RETRIEVE_FAILURE = 'POKEDEXES_RETRIEVE_FAILURE'

export function pokedexesRetrieveRequest(data) {
  return { type: POKEDEXES_RETRIEVE_REQUEST, data }
}

export function pokedexesRetrieveSuccess(data) {
  return {
    type: POKEDEXES_RETRIEVE_SUCCESS,
    data,
  }
}

export function pokedexesRetrieveError(error) {
  return {
    type: POKEDEXES_RETRIEVE_FAILURE,
    error,
  }
}

export const POKEDEX_RETRIEVE_REQUEST = 'POKEDEX_RETRIEVE_REQUEST'
export const POKEDEX_RETRIEVE_SUCCESS = 'POKEDEX_RETRIEVE_SUCCESS'
export const POKEDEX_RETRIEVE_FAILURE = 'POKEDEX_RETRIEVE_FAILURE'

export function pokedexRetrieveRequest(data) {
  return { type: POKEDEX_RETRIEVE_REQUEST, data }
}

export function pokedexRetrieveSuccess(data) {
  return {
    type: POKEDEX_RETRIEVE_SUCCESS,
    data,
  }
}

export function pokedexRetrieveError(error) {
  return {
    type: POKEDEX_RETRIEVE_FAILURE,
    error,
  }
}
