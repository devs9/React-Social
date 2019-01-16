import styled from 'styled-components'
import { NavLink } from 'react-router-dom'

const getColor = ({ theme, color }) => {
  switch (color) {
    case 'black':
      return theme.colors.black
    case 'primary':
      return theme.colors.purple
    case 'lightRed':
      return theme.colors.lightRed
    default:
      return theme.colors.white
  }
}
export default styled(NavLink)`
  margin-right: 15px;
  text-decoration: none;
  color: ${props => getColor(props)};
  font-size: ${props => props.fontSize || '18px'};
  font-weight: ${props => props.fontWeight || 600};
`
