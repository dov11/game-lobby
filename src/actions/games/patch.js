import ApiClient from '../../api/client'
import { loading } from '../loading'
import { LOAD_ERROR } from '../loading'

const api = new ApiClient()

export const GAME_UPDATED = 'GAME_UPDATED'


export default (tile, gameId)=> {
  return (dispatch, getState) => {
    const { currentUser } = getState()
    dispatch(loading(true))
    const body={tile: {...tile, userId: currentUser._id}, currentUserId: currentUser._id}
    console.log(body)
    api.patch(`games/${gameId}`, body)
    .then(res => {
        // dispatch({type: GAME_UPDATED, payload: res.body})
        dispatch({type: loading(false).type})
      })
      .catch(err => dispatch({type: LOAD_ERROR, payload: err}))

  }
}

// body {
// 	user: userId,
// 	user_action: user_joined
// }
// body {
// 	user: userId,
// 	user_action: user_left
// }
