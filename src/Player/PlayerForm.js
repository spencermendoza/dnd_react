import React from 'react';
import PropTypes from 'prop-types';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import { noop } from '../helpers/noop';

const PlayerForm = ({ player, onFormChange }) => {
  console.log('player object from inside player form', player);
  return (
    <form noValidate onSubmit={noop}>
      <input name="name" type="text" value={player.name} onChange={e => onFormChange(e)} />
    </form>
  );
};

PlayerForm.propTypes = {
  player: PropTypes.shape({
    name: PropTypes.string,
    hp: PropTypes.number,
    initiative: PropTypes.number,
    armor: PropTypes.number,
    damage: PropTypes.number
  }),
  onFormChange: PropTypes.func
};

export default PlayerForm;
