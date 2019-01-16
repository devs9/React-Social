import { createGlobalStyle } from 'styled-components'
import reset from 'styled-reset'

export default createGlobalStyle`
  ${reset}
  body {
    background: ${props => props.theme.colors.lightGray};
  }
`
