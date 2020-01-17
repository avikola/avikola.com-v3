import React, { Component } from "react"

import styled, { keyframes } from "styled-components"
import { Block } from "../utils/css/global"

const introduction = keyframes`
  10%{
    opacity: 1;
  }
  15%{
    opacity: 1;
    font-size: 7.5em;
  }
  90%{
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

const Dev = styled.h2`
  color: rgba(255, 255, 255, 0.93);
  font-family: "Roboto Mono", monospace;
  letter-spacing: 1px;
  font-weight: 500;
  text-align: center;
`

export default class intro extends Component {
  constructor(props) {
    super(props)
    this.state = { dev_content: "", hello_content: "" }
    this.dev = "// Software Developer"
    this.hello = "Hello there, I'm"
    this.dev_count = -1
    this.hello_count = -1
    this.dev_starter = false
  }

  componentDidMount() {
    setInterval(() => {
      if (this.hello_count < this.hello.length - 1) {
        this.hello_count += 1
        this.setState({
          hello_content:
            this.state.hello_content + this.hello[this.hello_count],
        })
      }
    }, 100)
  }

  DevDisplay() {
    setTimeout(() => {
      if (this.dev_count < this.dev.length - 1) {
        this.dev_count += 1
        this.setState({
          dev_content: this.state.dev_content + this.dev[this.dev_count],
        })
      }
    }, 1000)
  }

  componentDidUpdate() {
    if (!this.dev_starter) {
      setTimeout(() => {
        this.dev_starter = true
        this.DevDisplay()
      }, 4750)
    } else this.DevDisplay()
  }

  render() {
    return (
      <Block direction="column">
        <Dev>{this.state.hello_content}</Dev>
        <Name>AVISHKAR KOLAHALU</Name>
        <Dev>{this.state.dev_content}</Dev>
      </Block>
    )
  }
}
