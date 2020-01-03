import React, { Component } from 'react';
import { Player } from '../Player/Player';
import PlayerCardList from '../Player/PlayerCardList';
import PlayerFormDialog from '../Player/PlayerFormDialog';
import { playersExample, updatePlayer } from '../Player/playerHelpers';
import Button from '@material-ui/core/Button';

import './App.css';

// TODO: Put the "current" player in Context?
class App extends Component {
  state = {
    players: playersExample.map(playerJson => Player.create(playerJson)),
    dialog: {
      open: false,
      player: Player.create()
    }
  };

  handleAddClick = () => {
    const player = Player.create();
    this.setState({ dialog: { player, open: true } });
  };

  handleEditClick = player => {
    this.setState({ dialog: { player, open: true } });
  };

  handleDialogConfirmClick = player => {
    const updatedPlayers = updatePlayer(this.state.players, player);
    this.setState({ players: updatedPlayers, dialog: { open: false } });
  };

  handleDialogCancelClick = () => {
    this.setState({ dialog: { player: Player.create(), open: false } });
  };

  render() {
    const { open, player } = this.state.dialog;
    return (
      <>
        <PlayerCardList players={this.state.players} onEditClick={this.handleEditClick} />
        <Button onClick={this.handleAddClick}>Add New Player</Button>
        <PlayerFormDialog
          open={open}
          player={player}
          onClose={this.handleDialogCancelClick}
          onConfirm={this.handleDialogConfirmClick}
        />
      </>
    );
  }
}

export default App;
