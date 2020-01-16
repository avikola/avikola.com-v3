import React from "react"

import styled from "styled-components"
import { Block } from "../utils/css/global"

export const Name = styled.h1`
  color: #d83900;
  font-family: "Raleway", sans-serif;
  font-weight: 900;
  font-size: 4.25em;
  margin: 15px;
`

export default function intro() {
  return (
    <Block>
      <Name>Avishkar Kolahalu, Work In Progress</Name>
    </Block>
  )
}
