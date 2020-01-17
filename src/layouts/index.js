import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import { GlobalStyle } from "../utils/css/global"

const BodyContainer = styled.div`
  background-color: #141414;
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
`

const Layout = ({ children }) => {
  return (
    <BodyContainer>
      <GlobalStyle />
      {children}
    </BodyContainer>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
