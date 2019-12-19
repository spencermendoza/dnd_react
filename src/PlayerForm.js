import React from 'react';
import PropTypes from 'prop-types';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';

const PlayerForm = ({ player }) => <form noValidate></form>;

PlayerForm.propTypes = {
  player: {
    name: PropTypes.string,
    initiative: PropTypes.number,
    armor: PropTypes.number,
    damage: PropTypes.number,
    id: PropTypes.number
  }
};

// updatePlayer = player => {
//   this.setState(prevState => {
//     return {
//       players: [...prevState.players.filter(p => p.id !== player.id), player]
//     };
//   });
// };

// sortPlayers = players => {
//   return players.sort((p1, p2) => {
//     if (p1.id > p2.id) return 1;
//     if (p1.id === p2.id) return 0;
//     if (p1.id < p2.id) return -1;
//   });
// };

// handleAddPlayer = player => {};
