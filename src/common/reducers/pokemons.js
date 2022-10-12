import * as ActionTypes from '../actions'

const initialState = {
  pokemons: null,
  loading: false,
  error: null,
}

export function pokemonsReducer(action, state = initialState) {
  console.log('action', action)
  switch (action?.type) {
    case ActionTypes.POKEMONS_RETRIEVE_REQUEST:
      return {
        ...state,
        error: null,
        loading: true,
      }
    case ActionTypes.POKEMONS_RETRIEVE_SUCCESS:
      console.log(action)
      return {
        ...state,
        loading: false,
        pokemons: action.results,
      }
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

export function getPokemons(state) {
  return state.pokemonsReducer.pokemons
}

export function getLoading(state) {
  return state.pokemonsReducer.loading
}

export function getError(state) {
  return state.pokemonsReducer.error
}
