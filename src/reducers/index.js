import { combineReducers } from 'redux'
import {
  FETCH_MOVIE
} from '../actions'

const fetchMovie = (state = {}, action) => {
  switch (action.type) {
    case FETCH_MOVIE:
      return action.data
    default:
      return state
  }
}

const rootReducer = combineReducers({
  fetchMovie
})

export default rootReducer