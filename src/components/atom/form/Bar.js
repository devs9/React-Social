import styled from 'styled-components'

export default styled.span`
  width: 100%;
  display: block;
  padding-bottom: 10px;
  position: relative;
  &::before,
  &::after {
    content: '';
    height: 2px;
    bottom: 1px;
    position: absolute;
    left: 50%;
    transition: 0.2s ease all;
    max-width: ${props => (props.focus ? '50%' : 0)};
    background: ${props => props.theme.colors.veryDarkBlue};
  }
  &::after {
    right: 50%;
  }
`
