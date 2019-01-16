import styled from 'styled-components'

export default styled.div`
  width: ${props => props.width};
  height: ${props => props.height};
  margin: ${props => props.margin};
  padding: ${props => props.padding};
  align-items: ${props => props.alignItems};
  background-color: ${props => props.bgColor};
  border-radius: ${props => props.borderRadius};
  justify-content: ${props => props.justifyContent};
  display: ${props => props.display || 'block'};
  position: ${props => props.position || 'relative'};
`
