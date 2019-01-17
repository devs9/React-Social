import React from 'react'
import styled from 'styled-components'
import TextField from './TextFields'

const Div = styled.div`
  width: 90%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
`
export default ({ email, firstName, secondName, $keyUp, $onChange }) => (
  <Div>
    {['email', 'firstName', 'secondName'].map((item, i) => (
      <TextField
        key={item + i}
        name={item}
        type={item === 'email' ? 'email' : 'text'}
        value={
          item === 'email'
            ? email
            : item === 'firstName'
              ? firstName
              : secondName
        }
        onKeyUp={() => $keyUp(item)}
        onChange={() => $onChange(item)}
      />
    ))}
  </Div>
)
