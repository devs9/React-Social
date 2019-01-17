import React from 'react'
import TextField from './TextFields'

export default ({ email, password, $keyUp, $onChange, $viewPsw, viewOpen }) => (
  <>
    {['email', 'password'].map((item, i) => (
      <TextField
        key={item + i}
        name={item}
        type={viewOpen ? 'text' : item}
        value={item === 'email' ? email : password}
        onKeyUp={() => $keyUp(item)}
        onChange={() => $onChange(item)}
      />
    ))}
  </>
)
