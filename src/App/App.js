import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import PlayerCardList from '../Player/PlayerCardList';
import PlayerFormDialog from '../Player/PlayerFormDialog';
import PlayerSortMenu from '../Player/PlayerSortMenu';
import { PlayerConsumer } from '../Player/PlayerContext';
// TODO: Think about wether it makes more sense to pull in `sortPlayersBy` here,
//       or, to expose this through PlayerProvider.
import { sortPlayersBy } from '../Player/playerHelpers';
import TurnTimer from '../TurnTimer/TurnTimer';

import './App.css';

const App = () => (
  // TODO: The next improvement that we could make
  //       would be to make each component a PlayerConsumer,
  //       and to clean up App.
  <PlayerConsumer>
    {({
      sortBy,
      players,
      dialog: { player, open },
      handleAddClick,
      handleEditClick,
      handleDialogCancelClick,
      handleDialogConfirmClick,
      handleSortMenuChange
    }) => (
      <>
        <PlayerSortMenu onChange={handleSortMenuChange} />
        <PlayerCardList players={sortPlayersBy(players, sortBy)} onEditClick={handleEditClick} />
        <Button onClick={handleAddClick}>Add New Player</Button>
        <TurnTimer turnDuration={5000} />
        <PlayerFormDialog
          open={open}
          player={player}
          onClose={handleDialogCancelClick}
          onConfirm={handleDialogConfirmClick}
        />
      </>
    )}
  </PlayerConsumer>
);

export default App;
