import React, { Component } from 'react'
import styled from 'styled-components'
import Label from '../../atom/form/Label'
import Bar from '../../atom/form/Bar'
import Input from '../../atom/form/Input'

const Div = styled.div`
  position: relative;
  width: ${props => props.width};
  margin: 20px 20px 10px 30px;
`
export default class extends Component {
  state = {
    focused: false,
  }
  $focus = () => {
    this.props.value === '' &&
      this.setState(prevState => ({ focused: !prevState.focused }))
  }
  render() {
    const { type, value, name, onChange, onKeyUp } = this.props
    const { focused } = this.state
    return (
      <Div
        width={name === 'email' ? '80%' : name === 'password' ? '80%' : '40%'}
      >
        <Input
          autoComplete="foo"
          value={value}
          type={type}
          name={name}
          focus={focused}
          used={focused}
          onKeyUp={onKeyUp}
          onChange={onChange(`${name}`)}
          onFocus={this.$focus}
          onBlur={this.$focus}
        />
        <Label
          children={name}
          focus={focused}
          used={focused}
          position="absolute"
        />
        <Bar focus={focused} />
      </Div>
    )
  }
}
