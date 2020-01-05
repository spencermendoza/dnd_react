import React from 'react';
import Button from '@material-ui/core/Button';
import PlayerCardList from '../Player/PlayerCardList';
import PlayerFormDialog from '../Player/PlayerFormDialog';
import { PlayerSortMenu } from '../Player/PlayerSortMenu';
import { PlayerConsumer } from '../Player/PlayerContext';

const App = () => (
  <>
    <PlayerSortMenu />
    <PlayerCardList />
    <PlayerFormDialog />
    <PlayerConsumer>
      {({ handleAddClick }) => <Button onClick={handleAddClick}>Add New Player</Button>}
    </PlayerConsumer>
  </>
);

export default App;
