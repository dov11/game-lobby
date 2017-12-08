import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { disconnect } from '../actions/websocket'
import { connect as connectToSocket } from '../actions/websocket'
import fetchGames from '../actions/games/fetch'
import CreateGameButton from '../components/games/CreateGameButton'
import Paper from 'material-ui/Paper'
import Menu from 'material-ui/Menu'
import MenuItem from 'material-ui/MenuItem'
import WatchGameIcon from 'material-ui/svg-icons/image/remove-red-eye'
import JoinGameIcon from 'material-ui/svg-icons/social/person-add'
import PlayGameIcon from 'material-ui/svg-icons/hardware/videogame-asset'
import WaitingIcon from 'material-ui/svg-icons/image/timelapse'
import { push } from 'react-router-redux'
import './Lobby.css'

class Lobby extends PureComponent {
  componentWillMount() {
    this.props.fetchGames()
    this.props.connectToSocket()
  }

  goToGame = gameId => event => this.props.push(`/game/${gameId}`)

  isJoinable(game) {
    // implement later
    return true
  }

  isPlayer(game) {
    // implement later
    return false
  }

  renderGame = (game, index) => {
    let ActionIcon = this.isJoinable(game) ? JoinGameIcon : WatchGameIcon
    if (this.isPlayer(game)) ActionIcon = game.isPlayable ? PlayGameIcon : WaitingIcon

    return (
      <MenuItem
        key={index}
        onClick={this.goToGame(game._id)}
        rightIcon={<ActionIcon />}
        primaryText={game.title} />
    )
  }

  render() {
    return (
      <div className="Lobby">
        <h1>Lobby!</h1>
        <CreateGameButton />
        <Paper className="paper">
          <Menu>
            { this.props.games.map(this.renderGame)}
          </Menu>
        </Paper>
      </div>
    )
  }
}

const mapStateToProps = ({ games }) => ({ games })

export default connect(mapStateToProps, { fetchGames, connectToSocket, push })(Lobby)