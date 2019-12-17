import React from 'react';
import { PropTypes } from 'prop-types';
import Box from '@material-ui/core/Box';
import PlayerCard from './PlayerCard';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  container: {
    display: 'flex',
    flexDirection: 'column'
  }
});

const CardContainer = ({ players }) => {
  const classes = useStyles();
  return (
    <Box className={classes.container}>
      {players.map(player => (
        <PlayerCard
          {...player}
          key={player.id}
          onEditClick={() => console.log('this has been a test')}
        />
      ))}
    </Box>
  );
};

CardContainer.propTypes = {
  players: PropTypes.array
};

export default CardContainer;
