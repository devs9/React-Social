import styled from 'styled-components'

const getColor = ({ btnStyle, theme }) => {
  switch (btnStyle) {
    case 'success':
      return theme.colors.darkGreen
    case 'warning':
      return theme.colors.darkOrange
    case 'danger':
      return theme.colors.darkRed
    case 'primary':
      return theme.colors.purple
    default:
      return theme.colors.purple
  }
}
export default styled.button`
  font-size: 14px;
  padding: 8px 10px;
  border-radius: 25px;
  cursor: pointer;
  border: none;
  outline: none;
  width: ${props => props.width};
  height: ${props => props.height};
  margin: ${props => props.margin};
  color: ${props => props.theme.colors.white};
  transition: background-color 0.2s, color 0.2s;
  display: ${props => props.display || 'inline-block'};
  justify-content: ${props => props.justifyContent};
  background-color: ${props => getColor(props)};
  &:hover {
    background-color: ${props => props.theme.colors.darkBlue};
  }
  &:active {
    background-color: ${props => props.theme.colors.primaryLight};
  }
  &:not(:checked):disabled {
    cursor: no-drop;
    background-color: ${props => props.theme.colors.accentColor};
  }
`
