import { combineReducers } from 'redux'
import { reportsReducer } from './reports'

const rootReducer = combineReducers({
  reportsReducer,
})

export default rootReducer
