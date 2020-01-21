import React, { Component } from 'react'
import { Block } from '../utils/css/global'
import styled, { createGlobalStyle, keyframes } from 'styled-components'

export default class Intro extends Component {
  constructor(props) {
    super(props)
    this.state = { dev_content: '', hello_content: '' }
    this.dev = '// Software Developer'
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

  componentDidUpdate() {
    if (!this.dev_starter) {
      this.dev_starter = true
      setTimeout(() => {
        setInterval(() => {
          if (this.dev_count < this.dev.length - 1) {
            this.dev_count += 1
            this.setState({
              dev_content: this.state.dev_content + this.dev[this.dev_count],
            })
          }
        }, 80)
      }, 4850)
    }
  }

  render() {
    return (
      <Block direction="column" className="noselect">
        <IntroAnimateStyle />
        <Block>
          <Dev hello>
            {this.state.hello_content}
            <Caret className="hello_caret" />
          </Dev>
        </Block>
        <Block fullname>
          <Name>
            <span>A</span>VISHKAR
          </Name>
          <Name surname>KOLAHALU</Name>
        </Block>
        <Block>
          <Dev>
            {this.state.dev_content}
            <Caret className="dev_caret" />
          </Dev>
        </Block>
      </Block>
    )
  }
}

const IntroAnimateStyle = createGlobalStyle`
@keyframes introduction {
		10%, 100% {
			opacity: 1;
		}
		15%, 90% {
			font-size: 8vw;
		}
		to {
			font-size: 6.5vw;
		}
	}

	@media (max-width: 768px) {
		@keyframes introduction {
			10%, 100% {
				opacity: 1;
			}
			15%, 90% {
				font-size: 9vw;
			}
			to {
				font-size: 7.5vw;
			}
		}
	} `

const Name = styled.h1`
  font-family: 'Inter', sans-serif;
  font-weight: ${props => (props.surname ? '300' : '800')};
  font-size: 9vw;
  letter-spacing: ${props => (props.surname ? '-0.5vw' : '-0.2vw')};
  white-space: nowrap;
  opacity: 0;
  animation: introduction 2.5s 2.3s ease-out forwards;
  /*text-shadow: -3px 1px #ff0000, 3px 1px #0000ff;*/

  text-align: center;
  span {
    margin-right: -1.1vw;
    @media (max-width: 768px) {
      margin-right: -0.85vw;
    }
  }
`

const Dev = styled.h2`
  font-family: 'Roboto Mono', monospace;
  font-size: 1.5em;
  font-weight: 500;
  letter-spacing: 1px;
  /*text-shadow: -3px 1px #ff0000, 3px 1px #0000ff;*/

  text-align: center;
  align-self: ${props => (props.hello ? 'flex-end' : 'flex-start')};

  @media (max-width: 1228px) {
    font-size: 2.4vw;
  }

  @media (max-width: 768px) {
    font-size: 3.5vw;
  }
`

const caret_keeper = op => keyframes`
from, to {
  opacity: ${op};
}`

const caret_anim = op => keyframes`
50% {
  opacity: ${op};
}`

const Caret = styled.span`
  display: inline-block;
  width: 0.14em;
  height: 1.45em;
  background-color: ${props => props.theme.accent};
  margin-bottom: -0.27em;
  margin-left: 3px;
  opacity: 0;
  /*box-shadow: -3px 1px #ff0000, 3px 1px #0000ff;*/

  &.hello_caret {
    opacity: 1;

    animation-name: ${caret_anim(0)}, ${caret_keeper(0)};
    animation-duration: 1.1s, 0.1s;
    animation-delay: 1.7s, 4.95s;
    animation-timing-function: steps(1), linear;
    animation-iteration-count: infinite, 1;
    animation-fill-mode: both, forwards;
  }

  &.dev_caret {
    animation-name: ${caret_keeper(1)}, ${caret_anim(1)};
    animation-duration: 2s, 1.1s;
    animation-delay: 4.95s, 7s;
    animation-timing-function: linear, steps(1);
    animation-iteration-count: 1, infinite;
  }
`
