import ApiClient from '../../api/client'
import { loading } from '../loading'
import { LOAD_ERROR } from '../loading'
import {
  GAME_CREATED,
} from './subscribe'

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
