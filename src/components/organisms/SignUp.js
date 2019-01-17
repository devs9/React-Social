import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import Form from '../atom/form/Form'
import Div from '../atom/Div'
import Text from '../atom/Text'
import TextField from '../molecules/form/TextFields'
import SelectField from '../molecules/form/SelectField'
import IsAccount from '../molecules/form/IsAccount'
import SignLogo from '../molecules/form/SignLogo'
import SignWith from '../molecules/form/SignWith'
import LoadingBtn from '../molecules/hoc/LoadingBtn'
import { googleSign, facebookSign } from '../../store/actions/authWithSocial'

class SignUp extends PureComponent {
  state = {
    errorMessage: '',
    btnDisabled: true,
    email: {
      value: '',
      focus: false,
      used: false,
      ref: input => (this.emailValue = input),
    },
    age: {
      value: '',
      name: '',
      focus: false,
      used: false,
    },
    firstName: {
      value: '',
      focus: false,
      used: false,
      ref: input => (this.emailValue = input),
    },
    secondName: {
      value: '',
      focus: false,
      used: false,
      ref: input => (this.emailValue = input),
    },
  }
  $onChange = fieldName => e => {
    this.setState({
      [fieldName]: { ...this.state[fieldName], value: e.currentTarget.value },
    })
  }
  $focus = fieldName => () => {
    this.setState({ [fieldName]: { ...this.state[fieldName], focus: true } })
  }
  $blur = fieldName => () => {
    this.state[fieldName].value
      ? this.setState({
          [fieldName]: {
            ...this.state[fieldName],
            focus: true,
            used: false,
          },
        })
      : this.setState({
          [fieldName]: {
            ...this.state[fieldName],
            focus: false,
          },
        })
  }
  $onChangeSelect = selectedOption => {
    this.setState({ selectedOption })
  }
  render() {
    const { age, email, firstName, secondName, btnDisabled } = this.state
    const { googleSign, facebookSign } = this.props
    return (
      <Form width="600px" margin="-40px auto">
        <SignLogo signUp />

        <TextField
          name="email"
          type="email"
          margin="0 auto"
          width="75%"
          ref={email.ref}
          value={email.value}
          used={email.used}
          focus={email.focus}
          onFocus={this.$focus('email')}
          onChange={this.$onChange('email')}
          onBlur={this.$blur('email')}
        />
        <Div display="flex">
          <TextField
            name="firstName"
            type="text"
            width="45%"
            ref={firstName.ref}
            value={firstName.value}
            used={firstName.used}
            focus={firstName.focus}
            onFocus={this.$focus('firstName')}
            onChange={this.$onChange('firstName')}
            onBlur={this.$blur('firstName')}
          />
          <TextField
            name="secondName"
            type="text"
            width="45%"
            ref={secondName.ref}
            value={secondName.value}
            used={secondName.used}
            focus={secondName.focus}
            onFocus={this.$focus('secondName')}
            onChange={this.$onChange('secondName')}
            onBlur={this.$blur('secondName')}
          />
        </Div>
        <Div display="flex" width="max-content" justifyContent="space-around">
          <Text children="age" position="absolute" top="0" left="60px" />
          <TextField
            min="12"
            max="110"
            type="number"
            name={age.name}
            width="45%"
            ref={age.ref}
            value={age.value}
            used={age.used}
            focus={age.focus}
            onFocus={this.$focus('age')}
            onChange={this.$onChange('age')}
            onBlur={this.$blur('age')}
          />
          <SelectField
            name="age"
            value={age.value}
            title="Gender"
            onChange={this.$onChangeSelect}
          />
        </Div>
        <LoadingBtn
          disabled={btnDisabled}
          width="90%"
          btnStyle="warning"
          height="50px"
          margin="15px"
          children="Sign Up"
          // isLoading={isFetch}
          // onSubmit={this.$submit}
        />

        <SignWith eventGoogle={googleSign} eventFB={facebookSign} />
        <IsAccount isAccount={false} />
      </Form>
    )
  }
}
export default connect(
  null,
  { googleSign, facebookSign }
)(SignUp)
