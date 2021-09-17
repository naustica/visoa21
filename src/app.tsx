import { h, render, Component, ComponentChild } from 'preact'
import Router from 'preact-router'

import './app.scss'

import Map from './views/map/map'


class App extends Component {

  public render = (): ComponentChild => {
    return (
      <div class="app">
        <Router>
          <Map path="/" />
        </Router>
      </div>
    )
  }
}

render (
  <App />,
  document.body
)
