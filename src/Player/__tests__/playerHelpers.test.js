import { updatePlayer } from '../playerHelpers';

test('updatePlayer replaces a player in a list by id', () => {
  const players = [
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

  const playerToUpdate = {
    name: 'Zalabar',
    armor: 201,
    hp: 1270,
    initiative: 15000,
    damage: 320,
    id: 2
  };

  const expectedPlayers = [
    {
      name: 'Cronan',
      armor: 18,
      hp: 158,
      initiative: 18,
      damage: 72,
      id: 1
    },
    {
      name: 'Zalabar',
      armor: 201,
      hp: 1270,
      initiative: 15000,
      damage: 320,
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

  const updatedPlayers = updatePlayer(players, playerToUpdate);

  expect(updatedPlayers).toEqual(expectedPlayers);
});

// TODO: Add a test to make sure that `updatePlayer` doesn't mutate it's arguments.
