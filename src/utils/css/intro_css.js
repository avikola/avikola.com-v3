import styled, { keyframes } from 'styled-components'

export const Name = styled.h1`
  font-family: 'Inter', sans-serif;
  font-weight: ${props => (props.surname ? '300' : '800')};
  font-size: 9vw;
  letter-spacing: ${props => (props.surname ? '-0.5vw' : '-0.2vw')};
  white-space: nowrap;
  opacity: 0;
  animation: introduction 2.5s 2.3s ease-out forwards;

  text-align: center;
  span {
    margin-right: -1.1vw;
    @media (max-width: 768px) {
      margin-right: -0.85vw;
    }
  }
`

export const Dev = styled.h2`
  position: absolute;
  margin-top: ${props => (props.hello ? '-80px' : '80px')};
  font-family: 'Roboto Mono', monospace;
  letter-spacing: 1px;
  font-weight: 500;
  text-align: center;

  @media (max-width: 1228px) {
    margin-top: ${props => (props.hello ? '-7vw' : '7vw')};
    font-size: 2.4vw;
  }

  @media (max-width: 768px) {
    margin-top: ${props => (props.hello ? '-8vw' : '8vw')};
    font-size: 3.5vw;
  }
`

const dev_stay = keyframes`
from, to{
  opacity: 1;
}
`

const hello_gone = keyframes`
from, to{
  opacity: 0;
}`

const caret_anim = op => keyframes`
50%{
  opacity: ${op};
}`

export const Caret = styled.span`
  display: inline-block;
  width: 0.14em;
  height: 1.45em;
  background-color: ${props => props.theme.accent};
  margin-bottom: -0.27em;
  margin-left: 3px;
  opacity: 0;

  &.hello_caret {
    opacity: 1;

    animation-name: ${caret_anim(0)}, ${hello_gone};
    animation-duration: 1.1s, 0.1s;
    animation-delay: 1.7s, 4.95s;
    animation-timing-function: steps(1), linear;
    animation-iteration-count: infinite, 1;
    animation-fill-mode: both, forwards;
  }

  &.dev_caret {
    animation-name: ${dev_stay}, ${caret_anim(1)};
    animation-duration: 1.68s, 1.1s;
    animation-delay: 4.95s, 6.7s;
    animation-timing-function: linear, steps(1);
    animation-iteration-count: infinite;
  }
`
