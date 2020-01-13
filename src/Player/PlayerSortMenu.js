import React, { useContext } from 'react';
import { PlayerContext } from '../Player/PlayerContext';
import PopOutMenu from '../Menu/PopOutMenu';

export const PlayerSortMenu = () => {
  const { sortOptions, handleSortMenuChange } = useContext(PlayerContext);
  return <PopOutMenu menuItems={sortOptions} onChange={handleSortMenuChange} />;
};
