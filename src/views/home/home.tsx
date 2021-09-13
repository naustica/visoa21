import { h, Component, ComponentChild } from 'preact'
import { route } from 'preact-router'

import Map from './../../components/map/map'

import './home.scss'

interface Props {
}

interface State {

}

export default class Home extends Component<Props, State> {

  readonly state = {

  }

  public componentDidMount = () => {

  }

  public render = (): ComponentChild => {
    return (
      <div class="home-ui">
        <Map />
      </div>
    )
  }
}
