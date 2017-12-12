import { push } from 'react-router-redux'
import ApiClient from '../../api/client'
import { disconnect } from '../websocket'
// import {
//   APP_LOADING,
//   APP_DONE_LOADING,
//   LOAD_ERROR,
//   LOAD_SUCCESS
// } from '../loading'
export const USER_SIGNED_OUT = 'USER_SIGNED_OUT'

const api = new ApiClient()

// let userSignUp = {}

export default (user) => {
  return dispatch => {
    api.signOut()
    dispatch(push('/sign-in'))
    dispatch(disconnect())
    dispatch({
      type: USER_SIGNED_OUT
    })
  }
}
