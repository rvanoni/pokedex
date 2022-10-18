import React, { useEffect, useState } from 'react'
import * as R from 'ramda'
import { connect } from 'react-redux'
import {
  Container,
  Box,
  Typography,
  CircularProgress,
  Paper,
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  TableSortLabel,
  Link,
  TextField,
} from '@mui/material'

import { useParams } from 'react-router-dom'
import { StringParam, useQueryParam } from 'use-query-params'

import Header from 'pages/layout/Header'
import {
  pokedexRetrieveRequest,
  pokemonRetrieveRequest,
  // pokemonResetRequest,
} from 'common/actions'
import { getPokedex, getLoading } from 'common/reducers/pokedexes'
import { getPokemon } from 'common/reducers/pokemons'
import capitalize from 'common/utils/capitalize'
import getIdFromURL from 'common/utils/getIdFromURL'

import PokemonDrawer from './pokemonDrawer'

const sortOptions = {
  numberAsc: 'number',
  numberDesc: '-number',
  nameAsc: 'name',
  nameDesc: '-name',
}

function Pokemons({
  pokedex,
  loading,
  onGetPokedex,
  onGetPokemon,
  // onResetPokemon,
  pokemon,
}) {
  const { id } = useParams()
  const [sort = sortOptions.numberAsc, setSort] = useQueryParam(
    'sort',
    StringParam
  )

  const [searchTerm, setSearchTerm] = useState('')

  useEffect(() => {
    if (!id) return
    onGetPokedex(id)
    // onResetPokemon()
  }, [id])

  const description = R.head(
    R.filter((d) => d.language?.name === 'en', pokedex?.descriptions || [])
  )

  let pokemonList = R.sortBy(
    R.prop(sort.replace('-', '')),
    Object.keys(pokedex?.pokemon_entries || []).map((pe) => ({
      number: pokedex.pokemon_entries[pe].entry_number,
      name: pokedex.pokemon_entries[pe].pokemon_species.name,
      url: pokedex.pokemon_entries[pe].pokemon_species.url,
    }))
  )

  if (R.includes('-', sort)) pokemonList = R.reverse(pokemonList)

  if (searchTerm.length)
    pokemonList = R.filter(
      (p) => R.includes(searchTerm.toLowerCase(), p.name.toLowerCase()),
      pokemonList
    )

  const pokemonClicked = (pkmn) => onGetPokemon(getIdFromURL(pkmn.url))

  return (
    <Container sx={{ pt: 2 }}>
      {pokemon && <PokemonDrawer />}
      <Header />
      {loading && <CircularProgress />}
      <Box>
        <Link href='/pokedex'>Back to list</Link>
      </Box>
      {pokedex && (
        <Box sx={{ width: '100%' }}>
          <Typography variant='h4' sx={{ my: 3 }}>
            {capitalize(pokedex.name)} Pokedex
          </Typography>
          <Typography variant='body'>{description.description}</Typography>
          <Box sx={{ mt: 3 }}>
            <Typography variant='h5' sx={{ mb: 2 }}>
              Pokemons
            </Typography>
            <Box sx={{ mb: 2 }}>
              <TextField
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder='Search for a pokemon'
              />
            </Box>
            <TableContainer component={Paper}>
              <Table sx={{ minWidth: 650 }} aria-label='simple table'>
                <TableHead>
                  <TableRow>
                    <TableCell>
                      <TableSortLabel
                        active={
                          sort === sortOptions.numberAsc ||
                          sort === sortOptions.numberDesc
                        }
                        direction={R.includes('-', sort || '') ? 'desc' : 'asc'}
                        onClick={() =>
                          setSort(
                            sort === sortOptions.numberAsc
                              ? sortOptions.numberDesc
                              : sortOptions.numberAsc
                          )
                        }
                      >
                        Number
                      </TableSortLabel>
                    </TableCell>
                    <TableCell>
                      <TableSortLabel
                        active={
                          sort === sortOptions.nameAsc ||
                          sort === sortOptions.nameDesc
                        }
                        direction={R.includes('-', sort || '') ? 'desc' : 'asc'}
                        onClick={() =>
                          setSort(
                            sort === sortOptions.nameAsc
                              ? sortOptions.nameDesc
                              : sortOptions.nameAsc
                          )
                        }
                      >
                        Name
                      </TableSortLabel>
                    </TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {pokemonList.map((pkmn) => (
                    <TableRow
                      key={pkmn.number}
                      sx={{
                        '&:last-child td, &:last-child th': { border: 0 },
                        '&:hover': { cursor: 'pointer' },
                      }}
                      hover
                      onClick={() => {
                        pokemonClicked(pkmn)
                      }}
                    >
                      <TableCell component='th' scope='row'>
                        {pkmn.number}
                      </TableCell>
                      <TableCell>{capitalize(pkmn.name)}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </Box>
        </Box>
      )}
    </Container>
  )
}

const mapStateToProps = (state) => ({
  pokedex: getPokedex(state),
  loading: getLoading(state),
  pokemon: getPokemon(state),
})

export default connect(mapStateToProps, {
  onGetPokedex: pokedexRetrieveRequest,
  onGetPokemon: pokemonRetrieveRequest,
  // onResetPokemon: pokemonResetRequest,
})(Pokemons)
