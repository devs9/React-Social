import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import lc from 'local-storage'
import { withRouter } from 'react-router-dom'
import GlobalStyle from './styles/GlobalStyle'
import RootRouter from './routes'
import Header from './components/organisms/Header'
import { signInSuccess, signOut } from './store/actions/auth'
import { googleInit, facebookInit } from './store/actions/authWithSocial'

class App extends PureComponent {
  componentDidMount() {
    const { signInSuccess } = this.props
    const authData = lc.get('auth')

    authData && signInSuccess(authData)
    googleInit()
    facebookInit()

    this.callApi()
      .then(res => {
        console.log(res)
        this.setState({ response: res.express })
      })
      .catch(err => console.log(err))
  }

  callApi = async () => {
    const response = await fetch('/api/hello')
    const body = await response.json()

    if (response.status !== 200) throw Error(body.message)

    return body
  }
  render() {
    const { auth, signOut } = this.props
    const { isAuth } = auth
    return (
      <>
        <GlobalStyle />
        <Header isAuth={isAuth} signOut={signOut} />
        <RootRouter isAuth={isAuth} />
      </>
    )
  }
}
const mapStateToProps = state => ({ auth: state.auth })
export default withRouter(
  connect(
    mapStateToProps,
    { signInSuccess, signOut }
  )(App)
)
