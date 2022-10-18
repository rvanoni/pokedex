import capitalize from 'common/utils/capitalize'
import * as R from 'ramda'
import * as ActionTypes from '../actions'

const initialState = {
  pokedexes: null,
  pokedex: null, // selected pokedex
  loading: false,
  error: null,
}

export function pokedexesReducer(state = initialState, action) {
  switch (action?.type) {
    case ActionTypes.POKEDEX_RETRIEVE_REQUEST:
      return {
        ...state,
        error: null,
        loading: true,
        pokedex: null,
      }
    case ActionTypes.POKEDEXES_RETRIEVE_REQUEST:
      return {
        ...state,
        error: null,
        loading: true,
      }
    case ActionTypes.POKEDEX_RETRIEVE_SUCCESS:
      return { ...state, loading: false, pokedex: action.data }
    case ActionTypes.POKEDEXES_RETRIEVE_SUCCESS:
      return {
        ...state,
        loading: false,
        pokedexes: R.sortBy(
          R.prop('name'),
          action.data.results.map((res) => ({
            ...res,
            name: capitalize(res.name),
          }))
        ),
      }
    case ActionTypes.POKEDEX_RETRIEVE_FAILURE:
    case ActionTypes.POKEDEXES_RETRIEVE_FAILURE:
      return {
        ...state,
        error: action.error,
        loading: false,
      }
    default:
      return state
  }
}

export function getPokedex(state) {
  return state.pokedexesReducer.pokedex
}

export function getPokedexes(state) {
  return state.pokedexesReducer.pokedexes
}

export function getLoading(state) {
  return state.pokedexesReducer.loading
}

export function getError(state) {
  return state.pokedexesReducer.error
}
