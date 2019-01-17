import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import Form from '../atom/form/Form'
import Icon from '../atom/icons'
import IconView from '../atom/icons/IconView'
import Button from '../atom/Button'
import ErrorBox from '../atom/ErrorBox'
import SignLogo from '../molecules/form/SignLogo'
import SignWith from '../molecules/form/SignWith'
import IsAccount from '../molecules/form/IsAccount'
import SignIn from '../molecules/form/SignIn'
import LoadingBtn from '../molecules/hoc/LoadingBtn'
import { googleSign, facebookSign } from '../../store/actions/authWithSocial'

class FormBlock extends PureComponent {
  state = {
    isOpen: true,
    viewOpen: false,
    btnDisabled: true,
    errorMessage: '',
    email: '',
    password: '',
  }
  $onChange = fieldName => e => {
    this.setState({ [fieldName]: e.currentTarget.value })
  }
  $keyUp = () => {
    const { email, password } = this.state

    return email.length >= 5 && password.length >= 5
      ? this.setState({ btnDisabled: false })
      : this.setState({ btnDisabled: true })
  }
  $submit = e => {
    e.preventDefault()
    const { email, password } = this.state
    const { signIn, history } = this.props
    const data = {
      email: email,
      password: password,
    }

    this.setState({ password: '' })
    signIn(data, history)
  }
  $viewPsw = () => {
    this.setState({ viewOpen: !this.state.viewOpen })
  }
  $open = () => {
    this.setState({ isOpen: !this.state.isOpen })
  }
  render() {
    const { btnDisabled, viewOpen, email, password, isOpen } = this.state
    const { auth, googleSign, facebookSign, form } = this.props
    const { isFetch, error } = auth
    return isOpen ? (
      <Form
        width={form === 'in' ? '300px' : '600px'}
        position={form === 'in' ? 'absolute' : null}
        margin={form === 'in' ? '65px 0' : '-40px auto'}
        onSubmit={this.$submit}
      >
        {form === 'in' && (
          <Icon
            position="absolute"
            width="25px"
            height="25px"
            right="25px"
            $url="close"
            onClick={this.$open}
          />
        )}
        {error && <ErrorBox />}
        <SignLogo signIn={form === 'in'} signUp={form === 'up'} />
        {form === 'in' ? (
          <>
            <IconView
              svgHover
              bgColorView={viewOpen}
              $url="view"
              onClick={this.$viewPsw}
            />
            <SignIn
              $onChange={this.$onChange}
              $viewPsw={this.$viewPsw}
              $keyUp={this.$keyUp}
              viewOpen={viewOpen}
              email={email}
              password={password}
            />
          </>
        ) : null}
        <LoadingBtn
          children="Sign In"
          width="90%"
          height="50px"
          margin="15px"
          disabled={btnDisabled}
          isLoading={isFetch}
          onSubmit={this.$submit}
        />
        <SignWith eventGoogle={googleSign} eventFB={facebookSign} />
        <IsAccount isAccount={form === 'in'} />
      </Form>
    ) : (
      <Button
        position="absolute"
        top="40px"
        right="30px"
        width="75px"
        height="50px"
        children="Sign In"
        onClick={this.$open}
      />
    )
  }
}
export default connect(
  null,
  { googleSign, facebookSign }
)(FormBlock)
