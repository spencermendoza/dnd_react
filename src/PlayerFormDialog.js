import React from 'react';
import { PropTypes } from 'prop-types';
import DialogTitle from '@material-ui/core/DialogTitle';
import Dialog from '@material-ui/core/Dialog';
import Button from '@material-ui/core/Button';

const PlayerFormDialog = ({ player, open, onCloseClick }) => {
  return (
    <Dialog open={open}>
      <DialogTitle>Edit: {player.name}</DialogTitle>
      <Button onClick={e => onCloseClick(e)}>Close</Button>
    </Dialog>
  );
};

PlayerFormDialog.propTypes = {
  player: {
    name: PropTypes.string,
    hp: PropTypes.number,
    initiative: PropTypes.number,
    armor: PropTypes.number,
    damage: PropTypes.number
  },
  open: PropTypes.bool,
  onCloseClick: PropTypes.func
};

export default PlayerFormDialog;
