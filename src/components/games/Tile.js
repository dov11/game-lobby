import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import patchGame from '../../actions/games/patch'
import MineIcon from 'material-ui/svg-icons/device/brightness-high';
import FlatButton from 'material-ui/FlatButton';

import './tile.css'

class Tile extends PureComponent {
  renderContent = () => {
    if (this.props.tile.content=="-1") return null
    return this.props.tile.content
  }
  clickTile() {
    const bodyAction = {
      ...this.props.tile,
      clicked: true
    }
    this.props.patchGame(bodyAction, this.props.gameId)
  }
  render() {
    return (
      <FlatButton className="Tile"
        onClick={this.clickTile.bind(this)}
        icon={this.props.tile.clicked!=="false"&&this.props.tile.content=="-1"&&<MineIcon/>}
        >
				&nbsp;{this.props.tile.clicked!=="false" ? this.renderContent() : null}&nbsp;
      </FlatButton>
    )
  }
}

const mapDispatchtoProps = {
  patchGame: patchGame,
}
export default connect(null, mapDispatchtoProps)(Tile)
