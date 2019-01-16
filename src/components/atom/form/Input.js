import styled from 'styled-components'

export default styled.input`
  display: block;
  border: none;
  font-size: 16px;
  padding: 20px 10px 10px 5px;
  background: transparent;
  margin: ${props => props.margin};
  width: ${props => (props.width ? props.width : '100%')};
  border-bottom: 2px solid ${props => props.theme.colors.veryDarkBlue};
  outline: ${props => (props.focus ? 'none' : 'hidden')};
  &:hover {
    border-bottom: 2px solid ${props => props.theme.colors.primaryLight};
  }
  &:focus {
    outline: transparent;
  }
`
