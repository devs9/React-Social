import styled from 'styled-components'

const getColor = ({ theme, textStyle }) => {
  switch (textStyle) {
    case 'white':
      return theme.colors.white
    case 'primary':
      return theme.colors.purple
    default:
      return theme.colors.black
  }
}
export default styled.span`
  top: ${props => props.top};
  left: ${props => props.left};
  width: ${props => props.width};
  height: ${props => props.height};
  color: ${props => getColor(props)};
  padding: ${props => props.padding};
  font-weight: ${props => props.fontWeight};
  margin: ${props => props.margin || '10px 0'};
  font-size: ${props => props.fontSize || 18}px;
  position: ${props => props.position || 'relative'};
`
