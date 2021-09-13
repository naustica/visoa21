import { h, Component, ComponentChild } from 'preact'

import './button.scss'

interface Props {
  buttonName: string
}

interface State {
  selected: boolean
}

export default class Button extends Component<Props, State> {

  readonly state = {
    selected: false
  }

  public render = (): ComponentChild => {
    const { selected } = this.state
    const { buttonName } = this.props

    return (
      <button type="button" class={selected ? "filter-button-active" : "filter-button"} onClick={() => this.setState({selected: !selected})}>{buttonName}</button>
    )
  }
}
