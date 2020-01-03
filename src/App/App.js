import React, { Component } from 'react';
import PlayerCardList from '../Player/PlayerCardList';
import PlayerFormDialog from '../Player/PlayerFormDialog';
import { playersExample } from '../Player/playerHelpers';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';

import './App.css';

// TODO: Put the "current" player in Context?
class App extends Component {
  state = {
    players: playersExample,
    dialogOpen: false
  };

  handleAddClick = () => {};
  handleEditClick = () => {};
  handleDialogConfirmClick = () => {};
  handleDialogCancelClick = () => {};

  render() {
    return (
      <>
        <PlayerCardList players={this.state.players} onEditClick={this.handleEditClick} />
        <Button onClick={this.handleAddClick}>Add New Player</Button>
        {this.state.dialogOpen ? (
          <PlayerFormDialog
            open
            player={this.state.currentPlayer}
            onClose={this.handleDialogClose}
            onConfirm={this.handleDialogConfirm}
          />
        ) : null}
      </>
    );
  }
}

export default App;
