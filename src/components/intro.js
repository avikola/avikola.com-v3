import React, { Component } from "react"

import { Block } from "../utils/css/global"
import { Dev, Name } from "../utils/css/intro_css "

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
