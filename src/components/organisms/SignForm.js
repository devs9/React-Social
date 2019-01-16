import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import Div from '../atom/Div'
import Icon from '../atom/Icon'
import Form from '../atom/form/Form'
import ErrorBox from '../atom/ErrorBox'
import SignLogo from '../molecules/SignLogo'
import SignWith from '../molecules/SignWith'
import IsAccount from '../molecules/IsAccount'
import TextField from '../molecules/TextFields'
import LoadingBtn from '../molecules/hoc/LoadingBtn'
import { googleSign, facebookSign } from '../../store/actions/authWithSocial'

class SignForm extends PureComponent {
  state = {
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
    this.setState({ viewOpen: true })
    setTimeout(() => this.setState({ viewOpen: false }), 1000)
  }
  render() {
    const { btnDisabled, viewOpen } = this.state
    const { auth, googleSign, facebookSign, form } = this.props
    const { isFetch, error } = auth
    return (
      <Form
        width={form === 'in' ? '300px' : '600px'}
        position={form === 'in' ? 'absolute' : null}
        margin={form === 'in' ? '65px 0' : '-40px auto'}
        onSubmit={this.$submit}
      >
        <SignLogo signIn={form === 'in'} signUp={form === 'up'} />
        {error && <ErrorBox />}
        <Div>
          {form === 'in'
            ? ['email', 'password'].map((item, i) => (
                <div key={item + i}>
                  <TextField
                    name={item}
                    type={form === 'in' ? (viewOpen ? 'text' : item) : null}
                    value={`${this.state[item]}`}
                    onKeyUp={this.$keyUp}
                    onChange={this.$onChange}
                  />
                </div>
              ))
            : ['email'].map((item, i) => (
                <TextField
                  key={item + i}
                  name={item}
                  type={viewOpen ? 'text' : item}
                  value={`${this.state[item]}`}
                  onKeyUp={this.$keyUp}
                  onChange={this.$onChange}
                />
              ))}
          {form === 'in' && (
            <Icon
              svgHover
              bgColorView={this.state.viewOpen}
              bR="5px"
              width="35px"
              height="25px"
              top="100px"
              right="10px"
              position="absolute"
              bgSize="55%"
              $url="view"
              onClick={this.$viewPsw}
            />
          )}
        </Div>
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
        <IsAccount isAccount />
      </Form>
    )
  }
}
export default connect(
  null,
  { googleSign, facebookSign }
)(SignForm)
