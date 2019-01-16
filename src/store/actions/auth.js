import API from '../../api'
import lc from 'local-storage'
import * as types from '../types/auth'
import { toast } from 'react-toastify'

const signInStart = () => ({ type: types.SIGN_IN_START })
const signInFailureUser = payload => ({ type: types.SIGN_IN_FAILURE, payload })

export const signInSuccess = payload => ({
  type: types.SIGN_IN_SUCCESS,
  payload,
})
export const userLoggedOut = () => ({ type: types.SIGN_IN_OUT })

export const signIn = (data, history) => async dispatch => {
  try {
    dispatch(signInStart())

    const apiCall = await API.user.signIn(data)
    const dataApi = await apiCall.json()

    if (dataApi.status === 'ok') {
      dispatch(signInSuccess(dataApi.data))
      lc.set('auth', { ...dataApi.data })
      history.push('/profile')
    } else {
      dispatch(signInFailureUser(dataApi.message))
      toast.error(dataApi.message)
    }
  } catch (err) {
    dispatch(signInFailureUser('500 internal server error'))
    toast.error('500 internal server error', { autoClose: false })
  }
}
export const signOut = () => dispatch => {
  dispatch(userLoggedOut())
  lc.remove('auth')
}
