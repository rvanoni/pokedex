import { combineReducers } from 'redux'
import { pokemonsReducer } from './pokemons'
import { pokedexesReducer } from './pokedexes'

const rootReducer = combineReducers({
  pokemonsReducer,
  pokedexesReducer,
})

export default rootReducer
