import lc from 'local-storage'
import * as types from '../types/google'
import { signInSuccess } from './auth'

const googleAuthInitSuccess = () => ({ type: types.AUTH_GOOGLE_INIT_SUCCESS })
const googleAuthStart = () => ({ type: types.AUTH_GOOGLE_START })
const googleAutFailure = payload => ({
  type: types.AUTH_GOOGLE_FAILURE,
  payload,
})
const googleAuthSign = payload => ({
  type: types.AUTH_GOOGLE_GET_SIGN,
  payload,
})

export const googleInit = () => {
  const script = document.createElement('script')
  const initAuth = () => {
    window.gapi.load('auth2', () => {
      window.gapi.auth2
        .init({
          client_id: process.env.REACT_APP_GOOGLE_CLIENT_ID,
        })
        .then(() => console.log('Google Sign init SUCCESS'))
        .catch(err => console.log('Google Sign init ERROR', err))
    })
  }

  script.src = 'https://apis.google.com/js/platform.js'
  script.async = true
  script.defer = true
  script.onload = initAuth
  document.head.appendChild(script)
}
export const facebookInit = () => {
  window.fbAsyncInit = () => {
    window.FB.init({
      appId: '362822720937926',
      cookie: true,
      xfbml: true,
      version: 'v3.2',
    })
  }
  ;(function(d, s, id) {
    let js,
      fjs = d.getElementsByTagName(s)[0]
    if (d.getElementById(id)) return
    js = d.createElement(s)
    js.id = id
    js.src = '//connect.facebook.net/en_US/sdk.js'
    fjs.parentNode.insertBefore(js, fjs)
  })(document, 'script', 'facebook-jssdk')
}
export const facebookSign = () => async dispatch => {
  try {
    window.FB.login(response => {
      if (response.status === 'connected') {
        const accessToken = response.authResponse.accessToken

        window.FB.api(
          '/me',
          'get',
          {
            access_token: response.authResponse.accessToken,
            fields: 'id, name, email',
          },
          response => {
            const dataUser = {
              ...response,
              TokenID: accessToken,
              id: `facebook${response.id}`,
            }
            dispatch(signInSuccess(dataUser))
            lc.set('auth', dataUser)
          }
        )
      }
    })
  } catch (e) {
    console.log('err init FB')
  }
}
export const googleSign = () => async dispatch => {
  try {
    dispatch(googleAuthStart())
    dispatch(googleAuthInitSuccess())
    const auth2 = window.gapi.auth2.getAuthInstance()

    auth2
      .signIn()
      .then(googleUser => {
        const profile = googleUser.getBasicProfile()
        const idtToken = googleUser.getAuthResponse().id_token
        const dataUser = {
          id: `google${profile.getId()}`,
          TokenID: idtToken,
          fullName: profile.getName(),
          email: profile.getEmail(),
        }

        dispatch(googleAuthSign(dataUser))
        dispatch(signInSuccess(dataUser))
        lc.set('auth', dataUser)
      })
      .catch(err => console.log('closed', err))
  } catch (err) {
    dispatch(googleAutFailure('500 internal server error'))
  }
}
