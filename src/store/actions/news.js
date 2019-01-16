import API from '../../api'
import * as types from '../types/news'

const setNewsStart = () => ({ type: types.SET_NEWS_START })
const setNewsSuccess = payload => ({ type: types.SET_NEWS_SUCCESS, payload })
const setNewsFailureNews = payload => ({
  type: types.SET_NEWS_FAILURE,
  payload,
})

export const getNews = () => async dispatch => {
  try {
    dispatch(setNewsStart())

    const apiCall = await API.news.getNews()
    const news = await apiCall.json()

    if (apiCall.status === 200) {
      dispatch(setNewsSuccess(news))
    } else {
      dispatch(setNewsFailureNews(news.message))
    }
  } catch (err) {
    dispatch(setNewsFailureNews('500 internal server error'))
  }
}
