import React from 'react';
import { action } from '@storybook/addon-actions';
import PlayerCard from '../Player/PlayerCard';
import { fakePlayers } from '../Player/playerHelpers';

export default {
  title: 'Player Card'
};

const exampleEditClick = action('edit clicked');
const barri = fakePlayers.pop();

export const playerCardStory = () => <PlayerCard player={barri} onEditClick={exampleEditClick} />;
