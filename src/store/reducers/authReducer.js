import * as types from '../types/auth'

const initialState = {
  isAuth: false,
  isFetch: false,
  error: '',
  userId: null,
}
export default (state = initialState, { type, payload }) => {
  switch (type) {
    case types.SIGN_IN_START:
      return { ...state, isFetch: true }
    case types.SIGN_IN_SUCCESS:
      return {
        ...state,
        isFetch: false,
        isAuth: true,
        dataUser: payload,
        error: '',
      }
    case types.SIGN_IN_FAILURE:
      return { ...state, isAuth: false, isFetch: false, error: payload }
    case types.SIGN_IN_OUT:
      return {
        ...state,
        isAuth: false,
        isFetch: false,
        userId: null,
        error: '',
      }
    default:
      return state
  }
}
