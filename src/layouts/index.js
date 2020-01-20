import React from 'react'
import PropTypes from 'prop-types'
import styled, { ThemeProvider } from 'styled-components'
import { GlobalStyle } from '../utils/css/global'

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
      theme={{ white: 'rgba(255, 255, 255, 0.93)', black: '#141414' }}
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
