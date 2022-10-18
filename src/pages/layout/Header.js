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
} from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu'
import { Link } from 'react-router-dom'

const navItems = ['Pokedex']

function Header() {
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

            <Typography variant='h6' sx={{ flexGrow: 1 }}>
              Pokedex
            </Typography>
            <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
              {navItems.map((item) => (
                <Button
                  key={item}
                  sx={{ color: '#fff' }}
                  component={Link}
                  to={`/${item.toLowerCase()}`}
                >
                  {item}
                </Button>
              ))}
            </Box>
          </Toolbar>
        </AppBar>
      </Box>
    </Container>
  )
}

const mapStateToProps = () => ({})

export default connect(mapStateToProps, {})(Header)
