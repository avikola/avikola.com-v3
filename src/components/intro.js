import React, { Component } from 'react'

import { Block } from '../utils/css/global'
import { Dev, Name, Caret } from '../utils/css/intro_css'
import { createGlobalStyle } from 'styled-components'

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

export default class intro extends Component {
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
      }, 4950)
    }
  }

  render() {
    return (
      <Block direction="column" className="noselect">
        <IntroAnimateStyle />
        <Dev hello>
          {this.state.hello_content}
          <Caret className="hello_caret" />
        </Dev>
        <Block>
          <Name>
            <span>A</span>VISHKAR
          </Name>
          <Name surname>KOLAHALU</Name>
        </Block>
        <Dev>
          {this.state.dev_content}
          <Caret className="dev_caret" />
        </Dev>
      </Block>
    )
  }
}
