import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { PlayerProvider, PlayerConsumer } from '../PlayerContext';
import { FAKE_PLAYERS } from '../playerHelpers';

test('default values', () => {
  let plays = 'replace me';

  render(
    <PlayerProvider>
      <PlayerConsumer>
        {({ players }) => (plays = players) && <div />}
      </PlayerConsumer>
    </PlayerProvider>
  );

  expect(plays).toBe(FAKE_PLAYERS);
});

test('add click', () => {
  let ply = 'replace me';

  const { getByText } = render(
    <PlayerProvider>
      <PlayerConsumer>
        {({ handleAddClick, dialog: { player } }) => (
          <div>
            <div></div>
            <button
              onClick={e => {
                handleAddClick(e);
                ply = player;
              }}
            >
              New
            </button>
          </div>
        )}
      </PlayerConsumer>
    </PlayerProvider>
  );
  const button = getByText(/new/gi);

  fireEvent(button, new MouseEvent('click', { bubbles: true }));

  expect(ply).toEqual({
    name: '',
    id: 0,
    hp: 0,
    armor: 0,
    damage: 0,
    initiative: 0
  });
});
test.todo('edit click');
test.todo('sort menu change');

test.todo('handleDialogConfirmClick');
test.todo('handleDialogCancelClick');
