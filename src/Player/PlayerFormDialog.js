import React, { Component } from 'react';
import DialogTitle from '@material-ui/core/DialogTitle';
import Dialog from '@material-ui/core/Dialog';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import { Player } from './player';
import { PlayerContext } from './PlayerContext';

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

  static contextType = PlayerContext;

  handleCancelClick = (e, onCancel) => {
    e.preventDefault();
    onCancel();
  };

  handleSubmit = (e, onConfirm) => {
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

    onConfirm(newPlayer);
  };

  render() {
    const {
      dialog,
      handleDialogCancelClick,
      handleDialogConfirmClick
    } = this.context;
    const { player, open } = dialog;

    return (
      <Dialog open={open}>
        <DialogTitle>Editing: {player.name}</DialogTitle>
        <Box>
          <form noValidate onSubmit={this.handleSubmit}>
            <FormControl>
              <InputLabel htmlFor="name">Name</InputLabel>
              <Input
                type="text"
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
                type="number"
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
                type="number"
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
                type="number"
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
                type="number"
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
                type="number"
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
          <Button
            onClick={e => this.handleCancelClick(e, handleDialogCancelClick)}
          >
            Cancel
          </Button>
          <Button onClick={e => this.handleSubmit(e, handleDialogConfirmClick)}>
            Confirm
          </Button>
        </Box>
      </Dialog>
    );
  }
}

export default PlayerFormDialog;
