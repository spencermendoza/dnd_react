import React from 'react';
import Player from './Player';
import { PropTypes } from 'prop-types';

const Cards = ({ players }) => {
  return (
    <React.Fragment>
      {players.map((players, index) => (
        <Player
          {...players}
          name={players.name}
          armor={players.armor}
          hp={players.hp}
          init={players.init}
          damage={players.damage}
          key={players.id.toString()}
          index={index}
        />
      ))}
    </React.Fragment>
  );
};

Cards.propTypes = {
  players: PropTypes.array
};

export default Cards;
