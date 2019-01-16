import * as types from '../types/news'

const initialState = {
  isFetch: false,
  news: [],
  error: '',
}
export default (state = initialState, { type, payload }) => {
  switch (type) {
    case types.SET_NEWS_START:
      return { ...state, isFetch: true }
    case types.SET_NEWS_SUCCESS:
      return { ...state, isFetch: false, news: payload }
    case types.SET_NEWS_FAILURE:
      return { ...state, isFetch: false, error: payload }
    default:
      return state
  }
}
