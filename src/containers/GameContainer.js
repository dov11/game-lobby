import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
// import { disconnect } from '../actions/websocket'
// import { connect as connectToSocket } from '../actions/websocket'
import fetchOneGame from '../actions/games/fetch'
// import CreateGameButton from '../components/games/CreateGameButton'
// import Paper from 'material-ui/Paper'
// import Menu from 'material-ui/Menu'
// import MenuItem from 'material-ui/MenuItem'
// import WatchGameIcon from 'material-ui/svg-icons/image/remove-red-eye'
// import JoinGameIcon from 'material-ui/svg-icons/social/person-add'
// import PlayGameIcon from 'material-ui/svg-icons/hardware/videogame-asset'
import Tile from '../components/games/Tile'
// import './GameContainer.css'

class GameContainer extends PureComponent {
  componentWillMount() {
    const gameId = this.props.match.params.gameId
    // console.log('gameId:', gameId);
    this.props.fetchOneGame(gameId)
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
  // isPlayer(game) {
  //   // implement later
  //   return false
  // }
  //
  renderTiles = (game, index) => {

    return (
      <Tile
        key={index}
      />
    )
  }

  render() {
    console.log('props: ',this.props);
    const { game } = this.props.games
    return (
      <div className="GameContainer">
        <h1>GameContainer!</h1>
        {/* this.props.games.map(this.renderTiles) */}
      </div>
    )
  }
}
//
const mapStateToProps = ({ games }, { match }) => ({ games })
//
export default connect(mapStateToProps, { fetchOneGame })(GameContainer)
// export default GameContainer
