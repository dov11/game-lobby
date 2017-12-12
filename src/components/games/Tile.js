import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import patchGame from '../../actions/games/patch'
import MineIcon from 'material-ui/svg-icons/device/brightness-high';
import FlagIcon from 'material-ui/svg-icons/content/flag';
import FlatButton from 'material-ui/FlatButton';

import './tile.css'

class Tile extends PureComponent {
  renderContent = () => {
    if (this.props.tile.content=="-1") return null
    return this.props.tile.content
  }
  clickTile(e) {
    if (e.type==='click'){
    const bodyAction = {
      ...this.props.tile,
      clicked: true
    }
    this.props.patchGame(bodyAction, this.props.gameId)
    }
    else if (e.type==='contextmenu') {
      e.preventDefault()
      const bodyAction = {
        ...this.props.tile,
        clicked: 'right'
      }
      this.props.patchGame(bodyAction, this.props.gameId)
    }
  }
  render() {
    return (
      <FlatButton className="Tile"
        onClick={this.clickTile.bind(this)}
        onContextMenu={this.clickTile.bind(this)}
        disabled={this.props.tile.clicked !== "false" ? true : false}
        icon={this.props.tile.clicked !== "false" && this.props.tile.content == "-1" && <MineIcon/>}
        icon={this.props.tile.clicked === "right" && this.props.tile.content == "-1" && <FlagIcon/>}
        >
				&nbsp;{this.props.tile.clicked !== "false" ? this.renderContent() : null}&nbsp;
      </FlatButton>
    )
  }
}

const mapDispatchtoProps = {
  patchGame: patchGame,
}
export default connect(null, mapDispatchtoProps)(Tile)
