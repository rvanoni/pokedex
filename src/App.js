import React from 'react'

import { connect } from 'react-redux'
import { Container, Box } from '@mui/material'

import Header from './pages/layout/Header'

function App() {
  return (
    <Container>
      <Header />
      <Box sx={{ width: '100%' }}>Hello! To start, click on Pokedex</Box>
    </Container>
  )
}

const mapStateToProps = () => ({})

export default connect(mapStateToProps, {})(App)
