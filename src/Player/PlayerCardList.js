import React, { Component } from 'react';
import Box from '@material-ui/core/Box';
import PlayerCard from './PlayerCard';
import PlayerFormDialog from './PlayerFormDialog';

class PlayerCardList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      dialogOpen: false,
      player: {},
      players: [
        {
          name: 'Cronan',
          armor: 18,
          hp: 158,
          initiative: 18,
          damage: 72,
          id: 0
        },
        {
          name: 'Balazar',
          armor: 20,
          hp: 127,
          initiative: 15,
          damage: 32,
          id: 1
        },
        {
          name: 'Marsk',
          armor: 19,
          hp: 114,
          initiative: 7,
          damage: 56,
          id: 2
        },
        {
          name: 'Barri',
          armor: 15,
          hp: 69,
          initiative: 14,
          damage: 12,
          id: 3
        }
      ]
    };
  }

  handleEditClick = player => {
    this.setState({ player, dialogOpen: true });
  };

  handleDialogClose = () => {
    this.setState({ dialogOpen: false });
  };

  handleDialogConfirm = player => {
    console.log('player from dialog', player);
  };

  render() {
    return (
      <>
        <Box display="flex" flexDirection="column" justifyContent="center">
          {this.state.players.map(player => (
            <PlayerCard player={player} key={player.id} onEditClick={this.handleEditClick} />
          ))}
        </Box>
        <PlayerFormDialog
          player={this.state.player}
          open={this.state.dialogOpen}
          onClose={this.handleDialogClose}
          onConfirm={this.handleDialogConfirm}
        />
      </>
    );
  }
}

export default PlayerCardList;
