import { CREATED_GAME } from '../actions/games/create'
import { FETCHED_GAMES } from '../actions/games/fetch'


export default (state=[], {type, payload} ={}) => {
  switch(type) {
    case CREATED_GAME :
      return [{ ...payload}].concat(state)
      // return [...state, {...payload}]
    case FETCHED_GAMES :
      return [...payload]
    default :
      return state
  }
}
