import React, { Component } from 'react';
import Box from '@material-ui/core/Box';
import { Player } from './Player';
import PlayerCard from './PlayerCard';
import PlayerFormDialog from './PlayerFormDialog';
import Button from '@material-ui/core/Button';
import { updatePlayer } from './playerHelpers';

class PlayerCardList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      dialogOpen: false,
      currentPlayer: Player.create(),
      players: props.players || []
    };
  }

  handleAddClick = () => {
    this.setState({ currentPlayer: Player.create(), dialogOpen: true });
  };

  handleEditClick = player => {
    this.setState({ currentPlayer: player, dialogOpen: true });
  };

  handleDialogClose = () => {
    this.setState({ dialogOpen: false, currentPlayer: Player.create() });
  };

  handleDialogConfirm = player => {
    const updatedPlayers = updatePlayer(this.state.players, player);
    this.setState({
      players: updatedPlayers,
      dialogOpen: false,
      currentPlayer: Player.create()
    });
    // TODO: Use sort / filter functions here.
  };

  render() {
    return (
      <>
        <Box display="flex" flexDirection="column" justifyContent="center">
          {this.state.players.map(player => (
            <PlayerCard player={player} key={player.id} onEditClick={this.handleEditClick} />
          ))}
        </Box>
        {/* TODO: Remove the Button and the PlayerFormDialog for better separation of concern. */}
        <Box>
          <Button onClick={this.handleAddClick}>Add New Player</Button>
        </Box>
        <PlayerFormDialog
          player={this.state.currentPlayer}
          open={this.state.dialogOpen}
          onClose={this.handleDialogClose}
          onConfirm={this.handleDialogConfirm}
        />
      </>
    );
  }
}

export default PlayerCardList;
