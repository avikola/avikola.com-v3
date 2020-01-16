import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"

const BodyContainer = styled.div`
  margin: 0 auto;
  max-width: 960;
  padding: 2.0875rem;
  background-color: #3b1f2b;
`

const TestHead = styled.h1`
  color: #e5261c;
`

const Layout = ({ children }) => {
  return (
    <BodyContainer>
      <TestHead>TESTING THIS THING OUT</TestHead>
      {children}
    </BodyContainer>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
