import React from 'react';
import Button from '@material-ui/core/Button';
import PlayerCardList from '../Player/PlayerCardList';
import PlayerFormDialog from '../Player/PlayerFormDialog';
import PlayerSortMenu from '../Player/PlayerSortMenu';
import { PlayerConsumer } from '../Player/PlayerContext';
import TurnTimer from '../TurnTimer/TurnTimer';

const App = () => (
  <PlayerConsumer>
    {({
      sortPlayersBy,
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
