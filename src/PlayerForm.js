import React from 'react';
import PropTypes from 'prop-types';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import TextField from '@material-ui/core/TextField';

const PlayerForm = ({ player }) => {
  const playerProps = Object.getOwnPropertyNames(player);
  console.log(playerProps);
  var i;
  for (i = 0; i < playerProps.length; i++) {
    const propName = playerProps[i];
    console.log(propName);
  }

  //EXPLAIN: tried to write this in a way that wasn't dependant on
  //the props being the same each time. It's not working but I can come
  //back to this later.

  // return (
  //   <form noValidate autoComplete="off">
  //     <TextField id="outlined-basic" label={propname + ': ' + player.propName} variant="outlined" />
  //   </form>
  // );

  return (
    <form noValidate autoComplete="off">
      <TextField id="outlined-basic" label={'Name: ' + player.name} variant="outlined" />
      <TextField id="outlined-basic" label={player.armor} variant="outlined" />
      <TextField id="outlined-basic" label={player.hp} variant="outlined" />
      <TextField id="outlined-basic" label={player.initiative} variant="outlined" />
      <TextField id="outlined-basic" label={player.damage} variant="outlined" />
    </form>
  );
};

export default PlayerForm;

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
