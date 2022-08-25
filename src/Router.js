import React from 'react'
import { connect } from 'react-redux'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { QueryParamProvider } from 'use-query-params'

import App from './App'

function Router() {
  return (
    <BrowserRouter>
      <QueryParamProvider ReactRouterRoute={Route}>
        <Routes>
          <Route path='/' element={<App />} />
        </Routes>
      </QueryParamProvider>
    </BrowserRouter>
  )
}

const mapStateToProps = () => ({})

export default connect(mapStateToProps, {})(Router)
