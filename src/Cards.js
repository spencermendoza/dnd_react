import React from 'react';
import Player from './Player';
import { PropTypes } from 'prop-types';

const Cards = ({ players }) => {
  return (
    <React.Fragment>
      {players.map((player, index) => (
        <Player player={player} />
      ))}
    </React.Fragment>
  );
};

Cards.propTypes = {
  players: PropTypes.array
};

export default Cards;
