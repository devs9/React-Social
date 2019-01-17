import styled from 'styled-components'

const getUrl = ({ theme, $url }) => {
  switch ($url) {
    case 'gitHub':
      return theme.Svg.gitHub
    case 'google':
      return theme.Svg.google
    case 'linkedIn':
      return theme.Svg.linkedIn
    case 'facebook':
      return theme.Svg.facebook
    case 'lock':
      return theme.Svg.lock
    case 'view':
      return theme.Svg.view
    case 'close':
      return theme.Svg.closee
    default:
      return theme.Svg.default
  }
}
export default styled.svg`
  display: block;
  border-radius: ${props => props.bR || '75%'};
  background-repeat: no-repeat;
  background-position: center;
  top: ${props => props.top};
  right: ${props => props.right};
  width: ${props => props.width};
  height: ${props => props.height};
  position: ${props => props.position};
  background-image: url('${props => getUrl(props)}');
  background-size: ${props => props.bgSize || '75%'};
  cursor: ${props => (props.cursorNone ? 'inherit' : 'pointer')};
  background-color: ${props =>
    props.bgColorView && props.theme.colors.primaryLight};
  &:hover {
    background-color: ${props =>
      props.svgHover && props.theme.colors.darkOrange};
  }
  &:active {
    background-color: ${props =>
      props.svgActive && props.theme.colors.darkOrange};
  }
`
