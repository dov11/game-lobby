import { CREATED_GAME } from '../actions/games/create'
import { FETCHED_GAMES, FETCH_ONE_GAME } from '../actions/games/fetch'


export default (state=[], {type, payload} ={}) => {
  console.log('>>> REDUCER = CALLED: TYPE: ', type);
  switch(type) {
    case CREATED_GAME :
      return [{ ...payload}].concat(state)
      // return [...state, {...payload}]
    case FETCHED_GAMES :
      return [...payload]

    case FETCH_ONE_GAME :
      console.log('FETCH_ONE_GAME:', payload );
      // return [...payload]
      // return { ...state.games}.concat(payload)
      // console.log( game._id );
      // @todo: error detection when gameId doesn't exist??
      return state.map((game) => {
        if (game._id === payload._id) {
          console.log('test 1');
          return { ...payload }
        }
        console.log('test 2');
        return game
      })
      // return [...payload]

		default :
      return state
  }
}
