import React, { Component } from 'react'
import styled from 'styled-components'
import Div from '../atom/Div'
import Label from '../atom/form/Label'
import Bar from '../atom/form/Bar'
import Input from '../atom/form/Input'

const DivField = styled(Div)`
  width: 75%;
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
      <DivField>
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
      </DivField>
    )
  }
}
