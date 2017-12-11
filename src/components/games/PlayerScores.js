import React, { PureComponent } from 'react'
// import { connect } from 'react-redux'
// import { push } from 'react-router-redux'
import './PlayerScores.css'

class PlayerScores extends PureComponent {
	// renderPlayers = (player, score, index) {
	renderPlayers = (players, index) => {
		const test = (players.userName === this.props.currentUser.name) ? 'current-user' : ''
		return (
			<li key={index} className={'player ' + test}>
			<span className="player-name">{players.userName}</span> <span className="player-score">{players.score}</span>
			</li>
		)
	}
  render() {
    return (
      <div className="PlayerScores">
				<ul>
					<li className="header-player player"><span className="player-name">Players:</span> <span className="player-score">Score:</span></li>
					{ this.props.players
						.sort(function(a,b) {
							if (a.score>b.score){
								return -1
							}
							if (b.score>a.score){
								return 1
							}
							return 0
						})
						.map(this.renderPlayers) }
				</ul>
			</div>
		)
	}
}

export default PlayerScores
// export default connect(null, { push })(PlayerScores)
