import {
  FETCHED_GAMES,
  FETCH_ONE_GAME,
} from '../actions/games/fetch'

import {
  GAME_CREATED,
  GAME_UPDATED,
} from '../actions/games/subscribe'

const WINNER_DETERMINED="WINNER_DETERMINED"

export default (state=[], {type, payload} ={}) => {
  // console.log('>>> REDUCER = CALLED: TYPE: ', type);
  switch(type) {
    case GAME_CREATED :
      return [{ ...payload}].concat(state)
      // return [...state, {...payload}]
    case GAME_UPDATED :
    return state.map((game) => {
      if (game._id === payload._id) {
        return { ...payload }
      }
      return game
		})

    case WINNER_DETERMINED :
    return state.map((game) => {
      if (game._id === payload._id) {
        console.log("here")
        return { ...payload }
      }
      return game
		})

    case FETCHED_GAMES :
      return [...payload]

    case FETCH_ONE_GAME :
      // console.log('FETCH_ONE_GAME:', payload );
      // return [...payload]
      // @todo: error detection when gameId doesn't exist??
      if ( state.length < 1 ) {
        // console.log('fetch one game:', payload);
        return [{ ...payload }]
      } else {
        return state.map((game) => {
          if (game._id === payload._id) {
            return { ...payload }
          }
          return game
        })
      }

		default :
      return state
  }
}
