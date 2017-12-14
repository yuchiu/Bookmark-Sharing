import React from 'react';
import ReactDOM from 'react-dom';
import '../../../assets/scss/styles.scss'
import Home from './Home';
import store from '../../stores'
import {Provider} from 'react-redux'

const app = (
  <Provider store={store.configure()}>
    <Home/>
  </Provider>
)

ReactDOM.render(app, document.getElementById('root'))