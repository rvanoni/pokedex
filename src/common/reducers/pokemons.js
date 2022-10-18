import capitalize from 'common/utils/capitalize'
import * as R from 'ramda'
import * as ActionTypes from '../actions'

const initialState = {
  pokemons: [],
  pokemon: null, // selected pokemon
  loading: false,
  error: null,
}

export function pokemonsReducer(state = initialState, action) {
  switch (action?.type) {
    case ActionTypes.POKEMON_RESET_REQUEST:
      return { ...state, error: null, loading: false, pokemon: null }
    case ActionTypes.POKEMON_RETRIEVE_REQUEST:
      return {
        ...state,
        error: null,
        loading: true,
        pokemon: null,
      }
    case ActionTypes.POKEMONS_RETRIEVE_REQUEST:
      return {
        ...state,
        error: null,
        loading: true,
      }
    case ActionTypes.POKEMON_RETRIEVE_SUCCESS:
      return { ...state, loading: false, pokemon: action.data }
    case ActionTypes.POKEMONS_RETRIEVE_SUCCESS:
      return {
        ...state,
        loading: false,
        pokemons: R.sortBy(
          R.prop('name'),
          action.data.results.map((res) => ({
            ...res,
            name: capitalize(res.name),
          }))
        ),
      }
    case ActionTypes.POKEMON_RETRIEVE_FAILURE:
    case ActionTypes.POKEMONS_RETRIEVE_FAILURE:
      return {
        ...state,
        error: action.error,
        loading: false,
      }
    default:
      return state
  }
}

export function getPokemon(state) {
  return state.pokemonsReducer.pokemon
}

export function getPokemons(state) {
  return state.pokemonsReducer.pokemons
}

export function getLoading(state) {
  return state.pokemonsReducer.loading
}

export function getError(state) {
  return state.pokemonsReducer.error
}
