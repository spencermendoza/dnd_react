import React from 'react';
import PropTypes from 'prop-types';

const Card = ({ player }) => {
  return (
    <div className="player">
      <div>
        <span>Name: {player.name}</span>
        <span>Armor: {player.armor}</span>
        <span>Hp: {player.hp}</span>
        <span>Init: {player.init}</span>
        <span>Damage: {player.damage}</span>
      </div>
    </div>
  );
};

// TODO: Bring in typescript or research PropTypes
// so that we can enforce the presence of required
// properties on 'player'.
Card.propTypes = {
  name: PropTypes.string,
  armor: PropTypes.number,
  hp: PropTypes.number,
  init: PropTypes.number,
  damage: PropTypes.number
};

export default Card;
