import React from 'react';
import Button from '@material-ui/core/Button';
import PlayerCardList from '../Player/PlayerCardList';
import PlayerFormDialog from '../Player/PlayerFormDialog';
import { PlayerSortMenu } from '../Player/PlayerSortMenu';
import { PlayerConsumer } from '../Player/PlayerContext';
import TurnTimer from '../TurnTimer/TurnTimer';

import './App.css';

const App = () => (
  <>
    <PlayerSortMenu />
    <PlayerCardList />
    <PlayerFormDialog />
    <PlayerConsumer>
      {({ handleAddClick, players }) => {
        // turnStore.updateState(state => ({ ...state, players }));
        return (
          <>
            <Button onClick={handleAddClick} store={turnStore}>
              Add New Player
            </Button>
            <TurnTimer />
          </>
        );
      }}
    </PlayerConsumer>
  </>
);

export default App;
