import React, { Component } from 'react';
import CardContainer from './CardContainer';
import TurnTimer from './TurnTimer';

import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    // TODO: Find out if we gain anything by using a hook for state here,
    // or if declaring our initial state in the constructor is better.
    this.state = {
      players: [
        {
          name: 'Cronan',
          armor: 18,
          hp: 158,
          initValue: 18,
          damage: 72,
          id: 0
        },
        {
          name: 'Balazar',
          armor: 20,
          hp: 127,
          initValue: 15,
          damage: 32,
          id: 1
        },
        {
          name: 'Marsk',
          armor: 19,
          hp: 114,
          initValue: 7,
          damage: 56,
          id: 2
        },
        {
          name: 'Barri',
          armor: 15,
          hp: 69,
          initValue: 14,
          damage: 12,
          id: 3
        }
      ]
    };
  }

  render() {
    return (
      <div>
        <CardContainer players={this.state.players} />
        <TurnTimer players={this.state.players} />
      </div>
    );
  }
}

export default App;
