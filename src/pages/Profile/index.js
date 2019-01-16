import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { setUser } from '../../store/actions/user'

class Profile extends PureComponent {
  render() {
    return <div>Profile</div>
  }
}
const mapStateToProps = state => ({
  user: state.user,
})
export default connect(
  mapStateToProps,
  { setUser }
)(Profile)
