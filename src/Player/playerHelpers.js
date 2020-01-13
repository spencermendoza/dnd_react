import PropTypes from 'prop-types';

// TODO: Find a better place to put this, if we should even keep it.
// Copy pasta this Player type definition for jsdoc --> {name: string; id: number; hp: number; armor: number; damage: number; initiative: number;}
export const FAKE_PLAYERS = [
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
 * Update a given player.
 * @param {{name: string; id: number; hp: number; armor: number; damage: number; initiative: number;}[]} list - The list of Players that you want to update.
 * @param {{name: string; id: number; hp: number; armor: number; damage: number; initiative: number;}} player - the player to update.
 */
export const updatePlayer = (list, player) =>
  list.map(p => (p.id === player.id ? player : p));

const _sort = prop => (a, b) => {
  if (a[prop] > b[prop]) return 1;
  if (a[prop] === b[prop]) return 0;
  if (a[prop] < b[prop]) return -1;
};

/**
 * sortPlayersBy
 *
 * sort a list of players by a prop.
 *
 * @param {{name: string; id: number; hp: number; armor: number; damage: number; initiative: number;}[]} list - the list of players to sort.
 * @param {{name: string; id: number; hp: number; armor: number; damage: number; initiative: number;}} prop - property to sort the players by.
 */
export const sortPlayersBy = (list, prop) => [...list.sort(_sort(prop))];

/**
 * generateId
 * @returns {number} id.
 */
export const generateId = () => Math.floor(Math.random() * 100_000);
