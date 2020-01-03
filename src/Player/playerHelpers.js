import PropTypes from 'prop-types';

// TODO: Find a better place to put this, if we should even keep it.
export const playersExample = [
  {
    name: 'Cronan',
    armor: 18,
    hp: 158,
    initiative: 18,
    damage: 72,
    id: 1
  },
  {
    name: 'Balazar',
    armor: 20,
    hp: 127,
    initiative: 15,
    damage: 32,
    id: 2
  },
  {
    name: 'Marsk',
    armor: 19,
    hp: 114,
    initiative: 7,
    damage: 56,
    id: 3
  },
  {
    name: 'Barri',
    armor: 15,
    hp: 69,
    initiative: 14,
    damage: 12,
    id: 4
  }
];

export function getPlayerPropTypes() {
  return {
    name: PropTypes.string,
    id: PropTypes.number,
    hp: PropTypes.number,
    armor: PropTypes.number,
    damage: PropTypes.number,
    initiative: PropTypes.number
  };
}

/**
 *
 * @param {*} list
 * @param {*} player
 */
export const updatePlayer = (list, player) => list.map(p => (p.id === player.id ? player : p));
