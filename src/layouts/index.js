import React from 'react'
import PropTypes from 'prop-types'
import styled, { ThemeProvider } from 'styled-components'
import { GlobalStyle, white, black, accent, svgsize } from '../utils/css/global'
import '../utils/css/fonts.css'

const BodyContainer = styled.div`
  background-color: ${props => props.theme.black};
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
`

const Layout = ({ children }) => {
  return (
    <ThemeProvider
      theme={{
        white,
        black,
        accent,
        svgsize,
      }}
    >
      <BodyContainer>
        <GlobalStyle />
        {children}
      </BodyContainer>
    </ThemeProvider>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
