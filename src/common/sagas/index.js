import { takeLatest, fork, all, put, call } from 'redux-saga/effects'
import get from '../services/api'
import * as actions from '../actions'

export function* pokemonsRetrieve() {
  try {
    const response = yield call(get, {
      entity: 'pokemon',
      params: { limit: 10000 },
    })
    yield put(actions.pokemonsRetrieveSuccess(response))
  } catch (error) {
    yield put(actions.pokemonsRetrieveError(error))
  }
}
export function* watchPokemonsRetrieve() {
  yield takeLatest(actions.POKEMONS_RETRIEVE_REQUEST, pokemonsRetrieve)
}

export function* pokemonRetrieve(action) {
  try {
    console.log(action)
    const response = yield call(get, {
      entity: `pokemon/${action.data}`,
    })
    yield put(actions.pokemonRetrieveSuccess(response))
  } catch (error) {
    yield put(actions.pokemonRetrieveError(error))
  }
}
export function* watchPokemonRetrieve() {
  yield takeLatest(actions.POKEMON_RETRIEVE_REQUEST, pokemonRetrieve)
}

export function* pokedexesRetrieve() {
  try {
    const response = yield call(get, {
      entity: 'pokedex',
      params: { limit: 10000 },
    })
    yield put(actions.pokedexesRetrieveSuccess(response))
  } catch (error) {
    yield put(actions.pokedexesRetrieveError(error))
  }
}
export function* watchPokedexesRetrieve() {
  yield takeLatest(actions.POKEDEXES_RETRIEVE_REQUEST, pokedexesRetrieve)
}

export function* pokemonReset() {
  yield put(actions.pokemonResetRequest())
}

export function* watchPokemonReset() {
  yield takeLatest(actions.POKEMON_RESET_REQUEST, pokemonReset)
}

export function* pokedexRetrieve(action) {
  try {
    const response = yield call(get, {
      entity: `pokedex/${action.data}`,
    })
    yield put(actions.pokedexRetrieveSuccess(response))
  } catch (error) {
    yield put(actions.pokedexRetrieveError(error))
  }
}
export function* watchPokedexRetrieve() {
  yield takeLatest(actions.POKEDEX_RETRIEVE_REQUEST, pokedexRetrieve)
}

export default function* rootSaga() {
  yield all([
    fork(watchPokemonsRetrieve),
    fork(watchPokemonRetrieve),
    fork(watchPokedexesRetrieve),
    fork(watchPokedexRetrieve),
    fork(watchPokemonReset),
  ])
}
