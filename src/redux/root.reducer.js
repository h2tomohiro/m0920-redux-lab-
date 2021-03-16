import { combineReducers } from 'redux'
import personReducer from './person.reducer'

const rootReducer = combineReducers({
  people: personReducer,
})

export default rootReducer
