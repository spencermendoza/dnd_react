import React, { Component } from 'react';
import PlayerCardList from '../Player/PlayerCardList';
import TurnTimer from '../TurnTimer/TurnTimer';

import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <PlayerCardList />
        {/* <TurnTimer /> */}
      </div>
    );
  }
}

export default App;
