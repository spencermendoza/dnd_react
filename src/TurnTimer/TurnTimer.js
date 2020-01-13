import React, { useEffect, useState } from 'react';

// TODO: Figure out which css in js lib to use.
// Which one would work nicely with Gestures and
// spring?
const TurnTimer = ({ children }) => {
  return children ? (
    children
  ) : (
    <div>
      hi
      <span>Hi</span>
      <span>Hi</span>
      <span>Hi</span>
      <span>Hi</span>
    </div>
  );
};

export default TurnTimer;
