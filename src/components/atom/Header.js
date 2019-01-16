import styled from 'styled-components'

export default styled.header`
  max-width: 100%;
  padding: 25px;
  height: 75px;
  font-size: 18px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: ${props => props.theme.colors.white};
  background-color: ${props => props.theme.colors.purple};
`
