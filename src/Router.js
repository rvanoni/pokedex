import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { QueryParamProvider } from 'use-query-params'
import { ReactRouter6Adapter } from 'use-query-params/adapters/react-router-6'

import { pokedexesRetrieveRequest } from 'common/actions'

import Pokedex from 'pages/pokedex'
import Pokemons from 'pages/pokedex/pokemons'

import App from './App'

function Router({ onRetrieveAllPokedexes }) {
  useEffect(() => {
    onRetrieveAllPokedexes()
  }, [])

  return (
    <BrowserRouter>
      <QueryParamProvider adapter={ReactRouter6Adapter}>
        <Routes>
          <Route path='/pokedex/:id/pokemons' element={<Pokemons />} />
          <Route path='/pokedex' element={<Pokedex />} />
          <Route path='/' element={<App />} />
        </Routes>
      </QueryParamProvider>
    </BrowserRouter>
  )
}

const mapStateToProps = () => ({})

export default connect(mapStateToProps, {
  onRetrieveAllPokedexes: pokedexesRetrieveRequest,
})(Router)
