import React from 'react'
import styled, { keyframes } from 'styled-components'

const keyFrameRoTate = keyframes`
  0% { transform: rotate(0deg) }
  25% { transform: rotate(180deg) }
  50% { transform: rotate(180deg) }
  75% { transform: rotate(360deg) }
  100% { transform: rotate(360deg) }
`
const keyFrameFill = keyframes`
 0% { transform: scaleY(0) }
 25% { transform: scaleY(0) }
 50% { transform: scaleY(1) }
 75% { transform: scaleY(1) }
 100% { transform: scaleY(0) }
`
const DivLoaderBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`
const DivLoaderItem = styled.div`
  width: 20px;
  height: 20px;
  border: 1px solid ${props => props.theme.colors.purple};
  background-color: ${props => props.theme.colors.purple};
  animation: ${keyFrameRoTate} 2s infinite ease;
  &:after {
    content: '';
    display: block;
    width: 100%;
    height: 100%;
    transform-origin: bottom;
    animation: ${keyFrameFill} 2s infinite ease-in;
    background-color: ${props => props.theme.colors.white};
  }
`
export default () => (
  <DivLoaderBox>
    <DivLoaderItem />
  </DivLoaderBox>
)
