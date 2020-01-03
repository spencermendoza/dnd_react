import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import { Player } from '../Player/Player';
import PlayerCardList from '../Player/PlayerCardList';
import PlayerFormDialog from '../Player/PlayerFormDialog';
import PlayerSortMenu from '../Player/PlayerSortMenu';
import { playersExample, updatePlayer, sortPlayersBy } from '../Player/playerHelpers';
import TurnTimer from '../TurnTimer/TurnTimer';

import './App.css';

class App extends Component {
  state = {
    sortBy: 'name',
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

  handleSortMenuChange = ({ sortBy }) => {
    this.setState({ sortBy });
  };

  render() {
    const { open, player } = this.state.dialog;
    return (
      <>
        <PlayerSortMenu onChange={this.handleSortMenuChange} />
        <PlayerCardList
          players={sortPlayersBy(this.state.players, this.state.sortBy)}
          onEditClick={this.handleEditClick}
        />
        <Button onClick={this.handleAddClick}>Add New Player</Button>
        <TurnTimer turnDuration={5000} />
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
