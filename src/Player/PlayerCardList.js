import React, { Component } from 'react';
import Box from '@material-ui/core/Box';
import PlayerCard from './PlayerCard';
import PlayerFormDialog from './PlayerFormDialog';

class PlayerCardList extends Component {
  constructor(props) {
    super(props);

    // TODO: Apply sorting function.
    this.state = {
      dialogOpen: false,
      player: { name: '', armor: 0, initiative: 0, hp: 0, damage: 0, id: 0 },
      players: [
        {
          name: 'Cronan',
          armor: 18,
          hp: 158,
          initiative: 18,
          damage: 72,
          id: 1
        },
        {
          name: 'Balazar',
          armor: 20,
          hp: 127,
          initiative: 15,
          damage: 32,
          id: 2
        },
        {
          name: 'Marsk',
          armor: 19,
          hp: 114,
          initiative: 7,
          damage: 56,
          id: 3
        },
        {
          name: 'Barri',
          armor: 15,
          hp: 69,
          initiative: 14,
          damage: 12,
          id: 4
        }
      ]
    };
  }

  handleEditClick = ({ player }) => {
    this.setState({ player, dialogOpen: true });
  };

  handleDialogClose = () => {
    this.setState({ dialogOpen: false });
  };

  handleDialogConfirm = player => {
    this.setState(state => ({
      players: [...state.players.filter(p => p.id !== player.id), player],
      dialogOpen: false
    }));
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
