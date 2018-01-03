import React from 'react'
import ReactDOM from 'react-dom'
import {Home} from './components/layout/'
import store from './stores'
import {Provider} from 'react-redux'
import '../public/assets/scss/styles.scss'

const app = (
  <Provider store={store.configure()}>
    <Home/>
  </Provider>
)

ReactDOM.render(app, document.getElementById('root'))