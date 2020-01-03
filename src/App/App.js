import React, { Component } from 'react';
import PlayerCardList from '../Player/PlayerCardList';
import { playersExample } from '../Player/playerHelpers';

import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <PlayerCardList players={playersExample} />
      </div>
    );
  }
}

export default App;
