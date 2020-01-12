import React, { useEffect, useState } from 'react';

const TurnTimer = ({ store }) => {
  // Use state hooks to set and reference
  // the current turn and player.
  const [turn, setTurn] = useState({ duration: 0, complete: false });
  const [player, setPlayer] = useState({ name: '' });
  // Connect our state hooks to our Store.
  useEffect(() => {
    const turnSub = store.selectState('turn').subscribe(setTurn);
    const playerSub = store.selectState('player').subscribe(setPlayer);

    return function cleanup() {
      turnSub.unsubscribe();
      playerSub.unsubscribe();
    };
  }, [store]);

  return (
    <>
      <div>Current Player: {player.name}</div>
      <div>{turn.duration}</div>
    </>
  );
};

export default TurnTimer;
