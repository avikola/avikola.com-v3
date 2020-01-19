import styled, { keyframes, css } from "styled-components"

const introduction = keyframes`
  10%{
    opacity: 1;
  }
  15%, 90%{
    opacity: 1;
    font-size: 7.5em;
  }
  100%{
    font-size: 6em;
    opacity: 1;
  }
  `
const introduction_tablet = keyframes`
  10%{
    opacity: 1;
  }
  15%{
    opacity: 1;
    font-size: 8.5vw;
  }
  90%{
    opacity: 1;
    font-size: 8.5vw;
  }
  100%{
    font-size: 7vw;
    opacity: 1;
  }
  `

const introduction_mobile = keyframes`
  10%{
    opacity: 1;
  }
  15%{
    opacity: 1;
    font-size: 17vw;
  }
  90%{
    opacity: 1;
    font-size: 17vw;
  }
  100%{
    font-size: 15vw;
    opacity: 1;
  }
  `

export const Name = styled.h1`
  color: rgba(255, 255, 255, 0.93);
  font-family: "Inter", sans-serif;
  font-weight: 900;
  font-size: 4em;
  white-space: nowrap;
  opacity: 0;
  animation: ${introduction} 2.5s 2.5s ease-out forwards 1;
  text-align: center;

  @media (min-width: 769px) and (max-width: 1228px) {
    font-size: 5vw;
    white-space: normal;
    animation-name: ${introduction_tablet};
  }

  @media (max-width: 768px) {
    font-size: 11vw;
    line-height: 1.5em;
    white-space: normal;
    padding: 15px 0;
    animation-name: ${introduction_mobile};
  }
`

export const Dev = styled.h2`
  position: absolute;
  margin-top: 100px;
  color: rgba(255, 255, 255, 0.93);
  font-family: "Roboto Mono", monospace;
  letter-spacing: 1px;
  font-weight: 500;
  text-align: center;
`
