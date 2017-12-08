import React from 'react';
import FlatButton from 'material-ui/FlatButton';
import FontIcon from 'material-ui/FontIcon';
import LeaveIcon from 'material-ui/svg-icons/action/eject';

const LeaveGame = () => (
    <FlatButton
      label="Leave game"
      className="LeaveGame"
      labelPosition="after"
      primary={true}
      icon={<LeaveIcon />}
    />
);

export default LeaveGame;
