import { combineReducers } from 'redux'
import newsReducer from './newsReducer'
import authReducer from './authReducer'
import userReducer from './userReducer'
import googleReducer from './googleAuthReducer'

export default combineReducers({
  news: newsReducer,
  auth: authReducer,
  user: userReducer,
  google: googleReducer,
})
