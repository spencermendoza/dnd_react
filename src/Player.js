import React from 'react';
import PropTypes from 'prop-types';

const Player = () => {
  return (
    <div className="player">
      <div>
        <p>{PropTypes.name}</p>
        <p>{PropTypes.armor}</p>
      </div>
    </div>
  );
};

Player.propTypes = {
  name: PropTypes.string,
  armor: PropTypes.number,
  hp: PropTypes.number,
  init: PropTypes.number,
  damage: PropTypes.number,
  index: PropTypes.number
};

export default Player;
