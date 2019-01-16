import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import SignIn from '../../components/organisms/SignForm'
import { signIn } from '../../store/actions/auth'

class Registration extends PureComponent {
  render() {
    const { auth, history, signIn } = this.props
    return (
      <div>
        <SignIn form="up" auth={auth} signIn={signIn} history={history} />
      </div>
    )
  }
}
const mapStateToProps = state => ({
  auth: state.auth,
})
export default withRouter(
  connect(
    mapStateToProps,
    { signIn }
  )(Registration)
)
