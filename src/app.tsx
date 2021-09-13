import { h, render, Component, ComponentChild } from 'preact'
import Router from 'preact-router'
import { Provider } from 'unistore/preact'

import './app.scss'

import store from './store/store'

import Home from './views/home/home'


class App extends Component {

  public render = (): ComponentChild => {
    return (
      <div class="app">
        <Router>
          <Home path="/" />
        </Router>
      </div>
    )
  }
}

render (
  <Provider store={store}>
    <App />
  </Provider>,
  document.body
)
