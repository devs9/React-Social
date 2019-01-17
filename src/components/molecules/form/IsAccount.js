import React from 'react'
import Div from '../../atom/Div'
import Link from '../../atom/Link'
import Text from '../../atom/Text'

export default ({ isAccount }) => (
  <Div
    display="flex"
    width="100%"
    alignItems="center"
    justifyContent="space-evenly"
  >
    <Text
      textStyle
      children={isAccount ? 'Not a member?' : 'Have an account?'}
    />
    <Link
      color="lightRed"
      exact
      to={isAccount ? '/registration' : '/'}
      children={isAccount ? 'Registration' : 'Sign In'}
    />
  </Div>
)
