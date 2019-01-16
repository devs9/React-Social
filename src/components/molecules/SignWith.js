import React from 'react'
import styled from 'styled-components'
import Div from '../atom/Div'
import Icon from '../atom/Icon'
import Text from '../atom/Text'

const DivActionIcon = styled(Div)`
  width: 100%;
  height: 75px;
  display: flex;
  justify-content: space-between;
`
const SignWith = ({ eventGoogle, eventFB }) => (
  <>
    <Text children="Or Sign In with social" />
    <DivActionIcon>
      <Icon $url="google" onClick={eventGoogle} />
      <Icon $url="linkedIn" onClick={() => console.log('linkedIn')} />
      <Icon $url="gitHub" onClick={() => console.log('github')} />
      <Icon $url="facebook" onClick={eventFB} />
    </DivActionIcon>
  </>
)
export default SignWith
