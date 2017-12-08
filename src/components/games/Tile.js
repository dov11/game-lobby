import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import patch from '../../actions/games/patch'
import './tile.css'

class Tile extends PureComponent {
  clickTile() {
    const tile = {
      ...this.props.tile,
      clicked: true
    }
    this.props.patch(tile, this.props.gameId)
  }
  render() {
    console.log(this.props.tile)
    return (
      <button className="Tile"
        onClick={this.clickTile.bind(this)}
        >
				&nbsp;{this.props.tile.content}&nbsp;
      </button>
    )
  }
}

const mapDispatchtoProps = {patch: patch}
export default connect(null, mapDispatchtoProps)(Tile)
