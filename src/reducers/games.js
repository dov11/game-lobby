import {
  FETCHED_GAMES,
  FETCH_ONE_GAME,
} from '../actions/games/fetch'

import {
  GAME_CREATED,
  GAME_UPDATED,
  GAME_REMOVED,
  GAME_PLAYERS_UPDATED,
} from '../actions/games/subscribe'

export default (state=[], {type, payload} ={}) => {
  // console.log('>>> REDUCER = CALLED: TYPE: ', type);
  switch(type) {
    case GAME_CREATED :
      return [{ ...payload}].concat(state)
      // return [...state, {...payload}]
    case GAME_UPDATED :
      console.log('GAME_UPDATED in REDUCER');
      return [...payload]

    case FETCHED_GAMES :
      return [...payload]

    case FETCH_ONE_GAME :
      // console.log('FETCH_ONE_GAME:', payload );
      // return [...payload]
      // @todo: error detection when gameId doesn't exist??
      return state.map((game) => {
        if (game._id === payload._id) {
          return { ...payload }
        }
        return game
      })

		default :
      return state
  }
}
