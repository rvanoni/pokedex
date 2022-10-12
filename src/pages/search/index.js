import React from 'react'

import { connect } from 'react-redux'
import {
  Container,
  Box,
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Button,
  Autocomplete,
} from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu'

function Search({}) {
  return (
    <Container>
      <Box sx={{ mb: 8 }}>
        <AppBar component='nav'>
          <Toolbar>
            <IconButton
              color='inherit'
              aria-label='open drawer'
              edge='start'
              sx={{ mr: 2, display: { sm: 'none' } }}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant='h6' component='div' sx={{ flexGrow: 1 }}>
              Pokedex
            </Typography>
            <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
              <Button sx={{ color: '#fff' }}>User</Button>
            </Box>
          </Toolbar>
        </AppBar>
      </Box>
      <Box sx={{ width: '100%' }}>
        <Typography variant='h4'>Search for a pokemon:</Typography>
        <Box>
          <Autocomplete />
        </Box>
      </Box>
    </Container>
  )
}

const mapStateToProps = () => ({})

export default connect(mapStateToProps, {})(Search)
