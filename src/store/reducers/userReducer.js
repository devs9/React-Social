import * as types from '../types/user'

const initialState = {
  isFetch: false,
  userInfo: {},
  error: '',
}
export default (state = initialState, { type, payload }) => {
  switch (type) {
    case types.SET_USER_START:
      return { ...state, isFetch: true }
    case types.SET_USER_SUCCESS:
      return { ...state, isFetch: false, userInfo: payload, error: '' }
    case types.SET_USER_FAILURE:
      return { ...state, isFetch: false, error: payload }
    default:
      return state
  }
}
