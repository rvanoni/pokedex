import React from 'react'
import { connect } from 'react-redux'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { QueryParamProvider } from 'use-query-params'

import App from './App'
import Search from './pages/search'

function Router() {
  return (
    <BrowserRouter>
      <QueryParamProvider ReactRouterRoute={Route}>
        <Routes>
          <Route path='/search' element={<Search />} />
          <Route path='/' element={<App />} />
        </Routes>
      </QueryParamProvider>
    </BrowserRouter>
  )
}

const mapStateToProps = () => ({})

export default connect(mapStateToProps, {})(Router)
