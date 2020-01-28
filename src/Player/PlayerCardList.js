import React, { useContext } from 'react';
import Box from '@material-ui/core/Box';
import PlayerCard from './PlayerCard';
import { PlayerContext } from './PlayerContext';
import { sortPlayersBy } from './playerHelpers';

// This could take a 'sortBy' String prop that we use to sort
// the passed in players... Is that this component's responsibility?
// TODO: Find out a more efficient way of rendering sorted lists. Think about the timing of when the list needs to be re-sorted.
export const PlayerCardList = () => {
  const {
    players,
    handleEditClick,
    sortBy,
    handleTogglePlayerActive
  } = useContext(PlayerContext);
  return (
    <Box display="flex" flexDirection="column" justifyContent="center">
      {sortPlayersBy(players, sortBy).map(player => (
        <PlayerCard
          player={player}
          // id={player.id}
          onEditClick={handleEditClick}
          onToggleClick={handleTogglePlayerActive}
        />
      ))}
    </Box>
  );
};

export default PlayerCardList;
