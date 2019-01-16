import styled from 'styled-components'

export default styled.form`
  display: flex;
  right: 50px;
  top: 30px;
  border-radius: 25px;
  padding: 10px 20px 20px;
  align-items: center;
  flex-direction: column;
  width: ${props => props.width};
  margin: ${props => props.margin};
  position: ${props => props.position};
  background: ${props => props.theme.colors.white};
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.2), 0 1px 1px 0 rgba(0, 0, 0, 0.14),
    0 2px 1px -1px rgba(0, 0, 0, 0.12);
`
