import React from 'react'
import ReactDOM from 'react-dom/client'

import { Provider } from 'react-redux'

import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'

import { ThemeProvider } from '@mui/material/styles'
import CssBaseline from '@mui/material/CssBaseline'
import theme from 'common/theme'

import rootSaga from 'common/sagas'
import reducer from 'common/reducers'

import reportWebVitals from './reportWebVitals'
import Router from './Router'
import './index.css'

const sagaMiddleware = createSagaMiddleware()

const store = createStore(reducer, applyMiddleware(sagaMiddleware))

sagaMiddleware.run(rootSaga)

const root = ReactDOM.createRoot(document.getElementById('root'))

const render = () => {
  root.render(
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <CssBaseline />
        <Router />
      </Provider>
    </ThemeProvider>
  )
}

render()
store.subscribe(render)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
