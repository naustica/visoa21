import { h, render, Component, ComponentChild } from 'preact'
import Router from 'preact-router'

import './app.scss'

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
  <App />,
  document.body
)
