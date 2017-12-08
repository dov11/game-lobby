import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
// import { disconnect } from '../actions/websocket'
import { connect as connectToSocket } from '../actions/websocket'
import { fetchOneGame } from '../actions/games/fetch'
// import CreateGameButton from '../components/games/CreateGameButton'
// import Paper from 'material-ui/Paper'
// import Menu from 'material-ui/Menu'
// import MenuItem from 'material-ui/MenuItem'
// import WatchGameIcon from 'material-ui/svg-icons/image/remove-red-eye'
// import JoinGameIcon from 'material-ui/svg-icons/social/person-add'
// import PlayGameIcon from 'material-ui/svg-icons/hardware/videogame-asset'
import Tile from '../components/games/Tile'
import LeaveGame from '../components/games/LeaveGame'
import './GameContainer.css'


class GameContainer extends PureComponent {

  componentWillMount() {
    const { game } = this.props
    const gameId = this.props.match.params.gameId
    // console.log('gameId:', gameId);
    if (!game) {
      this.props.fetchOneGame(gameId)
    }
    this.props.connectToSocket()
    // this.props.connectToSocket()
  }

  componentWillReceiveProps(nextProps) {
    // this.props.fetchGames()
    // this.props.connectToSocket()
  }
  //
  // goToGame = (gameId) => {
  //   // implement later
  // }
  //
  // isJoinable(game) {
  //   // implement later
  //   return true
  // }
  //
  leaveGame() {
    console.log('leave game');
    return false
  }

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
    // const { game } = this.props.games
    return (
      <div className="GameContainer">
        <h1>GameContainer!</h1>
        <div className="Grid grid-3x3">{ game.grid.map(this.renderTiles) }</div>
        <LeaveGame onClick={this.leaveGame} />
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
    // currentPlayer,
    game,
    // isPlayer: !!currentPlayer,
    // hasTurn: currentPlayer && currentPlayer._id === currentUser._id,
    // isJoinable: game && !currentPlayer && game.players.length < 2
  }
}
//
export default connect(mapStateToProps, { fetchOneGame, connectToSocket })(GameContainer)
// export default GameContainer
