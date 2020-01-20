import styled from 'styled-components'

export const Name = styled.h1`
  font-family: 'Inter', sans-serif;
  font-weight: ${props => (props.surname ? '300' : '800')};
  font-size: 10em;
  letter-spacing: ${props => (props.surname ? '-0.5vw' : '-0.2vw')};
  white-space: nowrap;
  opacity: 0;
  animation: introduction 2.5s 2.5s ease-out forwards;

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

  @media (min-width: 769px) and (max-width: 1228px) {
    margin-top: ${props => (props.hello ? '-7vw' : '7vw')};
    font-size: 3vw;
  }

  @media (max-width: 768px) {
    margin-top: ${props => (props.hello ? '-8vw' : '8vw')};
    font-size: 3.8vw;
  }
`
