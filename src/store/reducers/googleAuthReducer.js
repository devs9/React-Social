import * as types from '../types/google'

const initialState = {
  error: '',
  isAuth: false,
  isFetch: false,
  userId: null,
  dataAuth: null,
  withGoogle: null,
  googleInit: false,
}
export default (state = initialState, { type, payload }) => {
  switch (type) {
    case types.AUTH_GOOGLE_START:
      return { ...state, isFetch: true }
    case types.AUTH_GOOGLE_GET_SIGN:
      return { ...state, isFetch: false, withGoogle: false }
    case types.AUTH_GOOGLE_SUCCESS:
      console.log(payload)
      return { ...state, isFetch: false, dataAuth: payload }
    case types.AUTH_GOOGLE_FAILURE:
      console.log(payload)
      return {
        ...state,
        isAuth: false,
        isFetch: false,
        userId: null,
        error: payload,
      }
    default:
      return state
  }
}
