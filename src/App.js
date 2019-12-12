import React, { Component } from 'react';
import CardContainer from './CardContainer';

import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      players: [
        {
          name: 'Cronan',
          armor: 18,
          hp: 158,
          init: 18,
          damage: 72,
          id: 0
        },
        {
          name: 'Balazar',
          armor: 20,
          hp: 127,
          init: 15,
          damage: 32,
          id: 1
        },
        {
          name: 'Marsk',
          armor: 19,
          hp: 114,
          init: 7,
          damage: 56,
          id: 2
        },
        {
          name: 'Barri',
          armor: 15,
          hp: 69,
          init: 14,
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
      </div>
    );
  }
}

export default App;
