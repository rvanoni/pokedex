import { takeLatest, fork, all, put, call } from 'redux-saga/effects'
import get from '../services/api'
import * as actions from '../actions'

export function* pokemonsRetrieve() {
  try {
    const response = yield call(get, { entity: 'pokemon' })
    yield put(actions.pokemonsRetrieveSuccess(response))
  } catch (error) {
    console.error(error)
    yield put(actions.pokemonsRetrieveError(error))
  }
}
export function* watchPokemonsRetrieve() {
  yield takeLatest(actions.POKEMONS_RETRIEVE_REQUEST, pokemonsRetrieve)
}

export default function* rootSaga() {
  yield all([fork(watchPokemonsRetrieve)])
}
