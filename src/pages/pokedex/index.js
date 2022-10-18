import React from 'react'

import { connect } from 'react-redux'
import {
  Container,
  Box,
  Typography,
  ListItemButton,
  ListItemText,
  List,
  Paper,
} from '@mui/material'

import { getPokedexes } from 'common/reducers/pokedexes'
import { pokedexRetrieveRequest } from 'common/actions'
import getIdFromURL from 'common/utils/getIdFromURL'

import Header from 'pages/layout/Header'
import { Link } from 'react-router-dom'

function Pokedex({ pokedexes }) {
  return (
    <Container sx={{ pt: 2 }}>
      <Header />
      <Box sx={{ width: '100%' }}>
        <Typography variant='h4' sx={{ my: 3 }}>
          Select a Pokedex
        </Typography>
        <Box sx={{ mb: 3 }}>
          <Paper elevation={3}>
            <List>
              {pokedexes?.map((pokedex) => (
                <ListItemButton
                  component={Link}
                  to={`/pokedex/${getIdFromURL(pokedex.url)}/pokemons`}
                  key={pokedex.name}
                >
                  <ListItemText primary={pokedex.name} />
                </ListItemButton>
              ))}
            </List>
          </Paper>
        </Box>
      </Box>
    </Container>
  )
}

const mapStateToProps = (state) => ({
  pokedexes: getPokedexes(state),
})

export default connect(mapStateToProps, {
  getPokedex: pokedexRetrieveRequest,
})(Pokedex)
