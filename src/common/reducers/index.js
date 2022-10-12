import { combineReducers } from 'redux'
import { pokemonsReducer } from './pokemons'

const rootReducer = combineReducers({
  pokemonsReducer,
})

export default rootReducer
