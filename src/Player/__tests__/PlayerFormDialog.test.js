import React from 'react';
import { render, fireEvent, user } from '@testing-library/react';
import { PlayerContext } from '../PlayerContext';
import PlayerFormDialog from '../PlayerFormDialog';

const wruce = {
  name: 'wruce billice',
  hp: 1,
  armor: 4,
  damage: 12,
  initiative: 89,
  id: 8
};

test('does not show form when closed', () => {
  const ctx = { dialog: { open: false, player: {} } };
  const { container } = render(
    <PlayerContext.Provider value={ctx}>
      <PlayerFormDialog />
    </PlayerContext.Provider>
  );

  expect(container.children.length).toEqual(0);
});

test('form values and visibility', () => {
  const ctx = { dialog: { open: true, player: wruce } };

  const { getByLabelText } = render(
    <PlayerContext.Provider value={ctx}>
      <PlayerFormDialog />
    </PlayerContext.Provider>
  );

  const hp = getByLabelText(/^hp/i);
  const name = getByLabelText(/^name/i);
  const armor = getByLabelText(/^armor/i);
  const damage = getByLabelText(/^damage/i);
  const initiative = getByLabelText(/^init/i);

  // TODO: Should we split these assertions into
  // separate tests?

  // HP
  expect(hp).toBeVisible();
  expect(hp).toHaveValue(1);
  // Name
  expect(name).toBeVisible();
  expect(name).toHaveValue('wruce billice');
  // Armor
  expect(armor).toBeVisible();
  expect(armor).toHaveValue(4);
  // Damage
  expect(damage).toBeVisible();
  expect(damage).toHaveValue(12);
  // Initiative
  expect(initiative).toBeVisible();
  expect(initiative).toHaveValue(89);
});

test('confirm click', () => {
  const mockConfirm = jest.fn();
  const ctx = {
    dialog: { open: true, player: wruce },
    handleDialogConfirmClick: mockConfirm
  };
  const { getByText } = render(
    <PlayerContext.Provider value={ctx}>
      <PlayerFormDialog />
    </PlayerContext.Provider>
  );
  const confirm = getByText(/confirm/i);

  fireEvent(confirm, new MouseEvent('click', { bubbles: true }));

  expect(mockConfirm).toHaveBeenCalled();
});

test('cancel click', () => {
  const mockCancel = jest.fn();
  const ctx = {
    dialog: { open: true, player: wruce },
    handleDialogCancelClick: mockCancel
  };
  const { getByText } = render(
    <PlayerContext.Provider value={ctx}>
      <PlayerFormDialog />
    </PlayerContext.Provider>
  );
  const cancel = getByText(/cancel/i);

  fireEvent(cancel, new MouseEvent('click', { bubbles: true }));

  expect(mockCancel).toHaveBeenCalled();
});
