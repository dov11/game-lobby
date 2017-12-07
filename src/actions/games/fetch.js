import ApiClient from '../../api/client'
import { loading } from '../loading'
import { LOAD_ERROR } from '../loading'

export const FETCHED_GAMES = 'FETCHED_GAMES'

const api = new ApiClient()

export default ()=> {
  return dispatch => {
    dispatch({type: loading(true).type})
    api.get('games')
    .then(res => {
        dispatch({type: FETCHED_GAMES, payload: res.body})
        dispatch({type: loading(false).type})
      })
      .catch(err => dispatch({type: LOAD_ERROR, payload: err}))
  }
}
