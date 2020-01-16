import React from "react"

import SEO from "../utils/seo"
import { Name } from "../components/intro"
import { Block } from "../utils/css/global"
import { Link } from "gatsby"
import styled, { keyframes } from "styled-components"

const shuffle = keyframes`
  33%{
    text-indent: -25px;
  }
  66%{
    text-indent: 25px;
  }
  100%
  {
    text-indent:0px;
  }
`
const LinkHome = styled.h2`
  font-size: 50px;
  font-family: "Raleway", sans-serif;
  &:hover {
    animation: ${shuffle} 0.7s linear infinite;
    color: #d83900;
  }
`

// TODO: Animate this page. Liven it up
const NotFoundPage = () => (
  <>
    <SEO title="404: Not found" />
    <Block direction="column">
      <Name>404 NOT FOUND</Name>
      <br />
      <Link to="/">
        <LinkHome>GO BACK HOME</LinkHome>
      </Link>
    </Block>
  </>
)

export default NotFoundPage
