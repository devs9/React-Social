import styled from 'styled-components'

export default styled.label`
  font-weight: normal;
  pointer-events: none;
  transition: 0.2s ease all;
  position: ${props => props.position || 'relative'};
  padding: ${props => props.padding};
  font-size: ${props => (props.focus || props.used ? 14 : 20)}px;
  top: ${props => (props.focus || props.used ? -20 : 0)}px;
  color: ${props =>
    props.focus || props.used
      ? props.theme.colors.primaryLight
      : props.theme.colors.purple};
`
