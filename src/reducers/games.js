import { CREATED_GAME } from '../actions/games/create'
import { FETCHED_GAMES, FETCH_ONE_GAME } from '../actions/games/fetch'


export default (state=[], {type, payload} ={}) => {
  switch(type) {
    case CREATED_GAME :
      return [{ ...payload}].concat(state)
      // return [...state, {...payload}]
    case FETCHED_GAMES :
      return [...payload]

    case FETCH_ONE_GAME :
      console.log('FETCH_ONE_GAME');
      // @todo: error detection when gameId doesn't exist??
      return state.map((game) => {
         if (game._id === payload._id) {
           return { ...payload }
         }
         return game
      })
      // return [...payload]

		default :
      return state
  }
}
