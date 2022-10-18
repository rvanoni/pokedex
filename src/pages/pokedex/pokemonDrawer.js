import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import {
  Box,
  Drawer,
  IconButton,
  List,
  ListItem,
  Typography,
} from '@mui/material'

import { getPokemon } from 'common/reducers/pokemons'
import capitalize from 'common/utils/capitalize'
import { Close } from '@mui/icons-material'

function PokemonDrawer({ pokemon }) {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    if (!pokemon) return
    setOpen(true)
  }, [pokemon])

  console.log(pokemon)
  return (
    <Drawer
      anchor='right'
      open={open}
      elevation={3}
      onClose={() => setOpen(false)}
    >
      <Box sx={{ p: 3 }}>
        <Box sx={{ display: 'flex', alignIetms: 'center' }}>
          <Box sx={{ flex: 1 }}>
            <Typography variant='h5'>{capitalize(pokemon.name)}</Typography>
          </Box>
          <IconButton onClick={() => setOpen(false)}>
            <Close />
          </IconButton>
        </Box>
        <Box
          sx={{
            mt: 2,
            border: '2px solid black',
            textAlign: 'center',
          }}
        >
          <img
            src={pokemon.sprites.other['official-artwork'].front_default}
            alt={pokemon.name}
          />
        </Box>
        <Box sx={{ display: 'flex', alignItems: 'top', mt: 2 }}>
          <Box sx={{ flex: '1' }}>
            <Typography variant='h6'>Stats</Typography>
            <List>
              {pokemon.stats.map((stat) => (
                <ListItem>
                  {stat.base_stat} {stat.stat.name}
                </ListItem>
              ))}
            </List>
          </Box>
          <Box sx={{ flex: '1' }}>
            <Typography variant='h6'>Types</Typography>
            <List>
              {pokemon.types.map((t) => (
                <ListItem>{t.type.name}</ListItem>
              ))}
            </List>
          </Box>
        </Box>
      </Box>
    </Drawer>
  )
}

const mapStateToProps = (state) => ({
  pokemon: getPokemon(state),
})

export default connect(mapStateToProps, {})(PokemonDrawer)
