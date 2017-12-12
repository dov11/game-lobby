import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
// import { disconnect } from '../actions/websocket'
import { connect as connectToSocket } from '../actions/websocket'
import { fetchOneGame } from '../actions/games/fetch'
import patchGame from '../actions/games/patch'
import { push } from 'react-router-redux'
// import CreateGameButton from '../components/games/CreateGameButton'
// import Paper from 'material-ui/Paper'
// import Menu from 'material-ui/Menu'
// import MenuItem from 'material-ui/MenuItem'
// import WatchGameIcon from 'material-ui/svg-icons/image/remove-red-eye'
// import JoinGameIcon from 'material-ui/svg-icons/social/person-add'
// import PlayGameIcon from 'material-ui/svg-icons/hardware/videogame-asset'
import Tile from '../components/games/Tile'
import LeaveGame from '../components/games/LeaveGame'
import PlayerScores from '../components/games/PlayerScores'
import './GameContainer.css'


class GameContainer extends PureComponent {

  componentWillMount() {
    const { currentUser } = this.props
    const gameId = this.props.match.params.gameId
    // console.log('gameId:', gameId);
    if ( currentUser == null ) {
      this.props.push('/sign-in')
    }

    const bodyAction = {
      user_action: 'user_joined'
    }
    this.props.patchGame(bodyAction, gameId)

    this.props.fetchOneGame(gameId)

    this.props.connectToSocket()
  }

  componentWillReceiveProps(nextProps) {
    // this.props.fetchGames()
    // this.props.connectToSocket()
  }

  // leaveGame() {
  //   console.log("leave")
  //   // const gameId = this.props.match.params.gameI
  //   // const bodyActionLeave = {
  //   //   user_action: 'user_left'
  //   // }
  //   // this.props.patchGame(bodyActionLeave, gameId)
  // }

  renderTiles = (tile, index) => {

    return (
      <Tile
        key={index} tile={tile} gameId={this.props.match.params.gameId}
      />
    )
  }

  render() {
    const { game } = this.props
    if ( !game ) return null
    // console.log('game:',game);

    return (
      <div className="GameContainer">
        <h1>{'Minesweeper #' + game._id.replace(/[a-z]/g,'').substr(game._id.replace(/[a-z]/g), 5)}</h1>
        <PlayerScores currentUser={this.props.currentUser} players={game.players} />
        <div className="Grid grid-5x5">{ game.grid.map(this.renderTiles) }</div>
        <h1>{game.winner}</h1>
        <LeaveGame onClick={this.leaveGame} gameId={this.props.match.params.gameId} />
      </div>
    )
  }
}
//
const mapStateToProps = ({ currentUser, games }, { match }) => {
  // console.log(match.params.gameId);
  const game = games.filter((g) => (g._id === match.params.gameId))[0]
  // const currentPlayer = game && game.players.filter((p) => (p.userId === currentUser._id))[0]

  return {
    currentUser,
    game,
    // hasTurn: currentPlayer && currentPlayer._id === currentUser._id,
    // isJoinable: game && !currentPlayer && game.players.length < 2
  }
}

const mapDispatchtoProps = {
  patchGame: patchGame,
  fetchOneGame,
  connectToSocket,
  push,
}

export default connect(mapStateToProps, mapDispatchtoProps)(GameContainer)
// export default GameContainer
