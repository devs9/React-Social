import API from '../../api'
import * as types from '../types/user'

const setUserStart = () => ({ type: types.SET_USER_START })
const setUserSuccess = payload => ({ type: types.SET_USER_SUCCESS, payload })
const setUserFailureUser = payload => ({
  type: types.SET_USER_FAILURE,
  payload,
})

export const setUser = id => async dispatch => {
  try {
    dispatch(setUserStart())

    const apiCall = await API.user.getData(id)
    const dataApi = await apiCall.json()

    if (dataApi.status === 'ok') {
      dispatch(setUserSuccess(dataApi.data))
    } else {
      dispatch(setUserFailureUser(dataApi.message))
    }
  } catch (err) {
    dispatch(setUserFailureUser('500 internal server error'))
  }
}
