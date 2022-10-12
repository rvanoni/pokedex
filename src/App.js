import React, { useEffect } from 'react'

import { connect } from 'react-redux'
import { Container, Box } from '@mui/material'

import { pokemonsRetrieveRequest } from './common/actions'

import Header from './pages/layout/Header'

function App({ onRetrieveAllPokemons }) {
  useEffect(() => {
    onRetrieveAllPokemons()
  }, [])

  return (
    <Container>
      <Header />
      <Box sx={{ width: '100%' }}>Hello! To start, go to /search</Box>
    </Container>
  )
}

const mapStateToProps = () => ({})

export default connect(mapStateToProps, {
  onRetrieveAllPokemons: pokemonsRetrieveRequest,
})(App)
