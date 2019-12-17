import React, { Component } from 'react';
import Box from '@material-ui/core/Box';
import PlayerCard from './PlayerCard';

class CardContainer extends Component {
  constructor(props) {
    super(props);

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

  handleEditClick = player => {
    console.log('player?', player);
  };

  render() {
    return (
      <Box display="flex" flexDirection="column" justifyContent="center">
        {this.state.players.map(player => (
          <PlayerCard player={player} key={player.id} onEditClick={p => this.handleEditClick(p)} />
        ))}
      </Box>
    );
  }
}

export default CardContainer;
