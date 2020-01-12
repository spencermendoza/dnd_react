import React from 'react';
import PlayerCard from '../PlayerCard';
import { render, fireEvent } from '@testing-library/react';

// TODO: Manage text fixtures.

test("shows the player's attributes", () => {
  const wruce = { name: 'Wruce Billice', hp: 1337, initiative: 1, armor: 8, damage: 1 };
  const { getByText } = render(<PlayerCard player={wruce} />);
  const name = getByText(/wruce billice/gi, { exact: false });
  const hp = getByText(/^hp/i);
  const armor = getByText(/^armor/i);
  const damage = getByText(/^damage/i);
  const initiative = getByText(/^init/i);

  // Name
  expect(name).toBeVisible();
  // HP
  expect(hp).toBeVisible();
  expect(hp).toHaveTextContent(/1337/g);
  // Armor
  expect(armor).toBeVisible();
  expect(armor).toHaveTextContent(/8/g);
  // Damage
  expect(damage).toBeVisible();
  expect(damage).toHaveTextContent(/1/g);
  // Initiative
  expect(initiative).toBeVisible();
  expect(initiative).toHaveTextContent(/1/g);
});

test('calls its onEditClick prop fn', () => {
  const austin = { name: 'austin', hp: 100, armor: 100, damage: 100, initiative: 1 };
  const mockCallback = jest.fn();
  const { getByText } = render(<PlayerCard player={austin} onEditClick={mockCallback} />);
  const editBtn = getByText(/edit/i);

  // Simulate a normal mouse click
  fireEvent(editBtn, new MouseEvent('click', { bubbles: true }));

  expect(mockCallback).toHaveBeenCalledWith(austin);
});
