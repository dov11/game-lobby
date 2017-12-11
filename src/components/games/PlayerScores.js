import React, { PureComponent } from 'react'
// import { connect } from 'react-redux'
// import { push } from 'react-router-redux'
import './PlayerScores.css'

class PlayerScores extends PureComponent {
	// renderPlayers = (player, score, index) {
	renderPlayers = (player, index) => {
		return (
			<li key={index} className="player"><span className="player-name">{player._id}</span> <span className="player-score">{player.score}</span></li>
		)
	}
  render() {
		console.log('PLAYER:',this.props.player);
    return (
      <div className="PlayerScores">
				<ul>
					<li className="header-player player"><span className="player-name">Players:</span> <span className="player-score">Score:</span></li>
					{ this.props.player.map(this.renderPlayers) }
				</ul>
			</div>
		)
	}
}

export default PlayerScores
// export default connect(null, { push })(PlayerScores)
