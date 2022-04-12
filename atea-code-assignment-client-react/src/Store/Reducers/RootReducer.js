import { combineReducers } from 'redux'
import GamesReducer from './GamesReducer'

export const RootReducer = combineReducers({
  Games: GamesReducer,
})

export default RootReducer
