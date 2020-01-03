import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import DialogTitle from '@material-ui/core/DialogTitle';
import Dialog from '@material-ui/core/Dialog';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import { getPlayerPropTypes } from './playerHelpers';
import { Player } from './Player';
// import { makeStyles } from '@material-ui/core/styles';

// TODO: Extract PlayerForm component.
// TODO: Replace HTML form inputs with Material-UI input components.
class PlayerFormDialog extends Component {
  constructor(props) {
    super(props);

    this.playerNameRef = React.createRef();
    this.playerInitiativeRef = React.createRef();
    this.playerHpRef = React.createRef();
    this.playerArmorRef = React.createRef();
    this.playerDamageRef = React.createRef();
    this.playerIdRef = React.createRef();
  }

  handleCloseClick = e => {
    e.preventDefault();
    this.props.onClose();
  };

  handleSubmit = e => {
    e.preventDefault();
    // TODO: Find out if there's a better way to
    // gather values from a form when using uncontrolled components.
    const newPlayer = Player.create({
      name: this.playerNameRef.current.value,
      initiative: parseInt(this.playerInitiativeRef.current.value),
      hp: parseInt(this.playerHpRef.current.value),
      armor: parseInt(this.playerArmorRef.current.value),
      damage: parseInt(this.playerDamageRef.current.value),
      id: parseInt(this.playerIdRef.current.value)
    });

    this.props.onConfirm(newPlayer);
  };

  render() {
    const player = this.props.player || Player.create();
    const open = this.props.open;
    return (
      <Dialog open={open}>
        <DialogTitle>Editing: {player.name}</DialogTitle>
        <Box>
          <form noValidate onSubmit={this.handleSubmit}>
            <FormControl>
              <InputLabel htmlFor="name">Name</InputLabel>
              <Input
                inputRef={this.playerNameRef}
                id="name"
                name="name"
                defaultValue={player.name}
                key={player.id}
              />
            </FormControl>
            <FormControl>
              <InputLabel htmlFor="initiative">Initiative</InputLabel>
              <Input
                inputRef={this.playerInitiativeRef}
                id="initiative"
                name="initiative"
                defaultValue={player.initiative}
                key={player.id}
              />
            </FormControl>
            <FormControl>
              <InputLabel htmlFor="hp">Hp</InputLabel>
              <Input
                inputRef={this.playerHpRef}
                id="hp"
                name="hp"
                defaultValue={player.hp}
                key={player.id}
              />
            </FormControl>
            <FormControl>
              <InputLabel htmlFor="armor">Armor</InputLabel>
              <Input
                inputRef={this.playerArmorRef}
                id="armor"
                name="armor"
                defaultValue={player.armor}
                key={player.id}
              />
            </FormControl>
            <FormControl>
              <InputLabel htmlFor="damage">Damage</InputLabel>
              <Input
                inputRef={this.playerDamageRef}
                id="damage"
                name="damage"
                defaultValue={player.damage}
                key={player.id}
              />
            </FormControl>
            <FormControl>
              <InputLabel htmlFor="id">Id</InputLabel>
              <Input
                inputRef={this.playerIdRef}
                id="id"
                name="name"
                defaultValue={player.id}
                key={player.id}
                readOnly
              />
            </FormControl>
          </form>
        </Box>
        {/* TODO: Use a render prop to make this more flexible. */}
        <Box className="dialog-actions">
          <Button onClick={this.handleCloseClick}>Close</Button>
          <Button onClick={this.handleSubmit}>Confirm</Button>
        </Box>
      </Dialog>
    );
  }
}

PlayerFormDialog.propTypes = {
  player: PropTypes.shape(getPlayerPropTypes()),
  open: PropTypes.bool.isRequired,
  onClose: PropTypes.func,
  onConfirm: PropTypes.func
};

export default PlayerFormDialog;
