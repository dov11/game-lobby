import ApiClient from '../../api/client'
import { loading } from '../loading'
import { LOAD_ERROR } from '../loading'

export const CREATED_GAME = 'CREATED_GAME'

const api = new ApiClient()

export default ()=> {
  return dispatch => {
    dispatch({type: loading(true).type})
    api.post('games')
    .then(res => {
        // dispatch({type: CREATED_GAME, payload: res.body})
        dispatch({type: loading(false).type})
      })
      .catch(err => dispatch({type: LOAD_ERROR, payload: err}))
  }
}
