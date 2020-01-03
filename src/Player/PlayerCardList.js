import React from 'react';
import Box from '@material-ui/core/Box';
import PlayerCard from './PlayerCard';

export const PlayerCardList = ({ players = [], onEditClick }) => {
  return (
    <Box display="flex" flexDirection="column" justifyContent="center">
      {players.map(player => (
        <PlayerCard player={player} key={player.id} onEditClick={onEditClick} />
      ))}
    </Box>
  );
};

export default PlayerCardList;
