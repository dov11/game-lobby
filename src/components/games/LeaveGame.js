import React, { PureComponent } from 'react'
import FlatButton from 'material-ui/FlatButton';
// import FontIcon from 'material-ui/FontIcon';
import LeaveIcon from 'material-ui/svg-icons/action/eject';
import patchGame from '../../actions/games/patch'
import { connect } from 'react-redux'
import { push } from 'react-router-redux'

// const LeaveGame = () => (
class LeaveGame extends PureComponent {

	// leaveGame() {
	leaveGame = () => {
		console.log('leave game');

		const bodyAction = {
    	user_action: 'user_left'
    }
    this.props.patchGame(bodyAction, this.props.gameId)

		// @todo: Create new event > LEAVE_GAME
		this.props.push('/')
	}
  render() {

    return (
      <FlatButton
        label="Leave game"
        className="LeaveGame"
        labelPosition="after"
        onClick={this.leaveGame}
        primary={true}
        icon={<LeaveIcon />}
      />
		)
	}
}

const mapDispatchtoProps = {
  patchGame: patchGame,
	push,
}

// export default LeaveGame
export default connect(null, mapDispatchtoProps)(LeaveGame)
