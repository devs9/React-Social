import React from 'react'
import styled from 'styled-components'
import Div from '../../atom/Div'
import Icon from '../../atom/icons'
import Text from '../../atom/Text'

const DivLogo = styled(Div)`
  width: 75px;
  height: 75px;
  border-radius: 50%;
  background-color: rgb(225, 0, 80);
`
const IconLogo = styled(Icon)`
  width: 50px;
  height: 50px;
  padding: 10px 0;
  margin: 0 auto;
`
export default ({ signIn, signUp }) => (
  <>
    <DivLogo possition="absolute">
      <IconLogo cursorNone bgSize="75%" $url="lock" />
    </DivLogo>
    <Text fontSize="18">{signIn ? 'Sign In' : signUp ? 'Sign Up' : null}</Text>
  </>
)
