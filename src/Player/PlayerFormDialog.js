import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import DialogTitle from '@material-ui/core/DialogTitle';
import Dialog from '@material-ui/core/Dialog';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
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

    this.handleCloseClick = this.handleCloseClick.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleCloseClick(e) {
    e.preventDefault();
    this.props.onClose(null);
  }

  handleSubmit(e) {
    e.preventDefault();
    // TODO: Find out if there's a better way to
    // gather values from a form when using uncontrolled components.
    const formValues = {
      name: this.playerNameRef.current.value,
      initiative: parseInt(this.playerInitiativeRef.current.value),
      hp: parseInt(this.playerHpRef.current.value),
      armor: parseInt(this.playerArmorRef.current.value),
      damage: parseInt(this.playerDamageRef.current.value),
      id: parseInt(this.playerIdRef.current.value)
    };

    this.props.onConfirm(formValues);
  }

  render() {
    const playerId = this.props.player.id;
    return (
      <Dialog open={this.props.open}>
        <DialogTitle>Editing: {this.props.player.name}</DialogTitle>
        <Box>
          <form noValidate onSubmit={this.handleSubmit}>
            <FormControl>
              <InputLabel htmlFor="name">Name</InputLabel>
              <Input
                inputRef={this.playerNameRef}
                id="name"
                name="name"
                defaultValue={this.props.player.name}
                key={playerId}
              />
            </FormControl>
            <FormControl>
              <InputLabel htmlFor="initiative">Initiative</InputLabel>
              <Input
                inputRef={this.playerInitiativeRef}
                id="initiative"
                name="initiative"
                defaultValue={this.props.player.initiative}
                key={playerId}
              />
            </FormControl>
            <FormControl>
              <InputLabel htmlFor="hp">Hp</InputLabel>
              <Input
                inputRef={this.playerHpRef}
                id="hp"
                name="hp"
                defaultValue={this.props.player.hp}
                key={playerId}
              />
            </FormControl>
            <FormControl>
              <InputLabel htmlFor="armor">Armor</InputLabel>
              <Input
                inputRef={this.playerArmorRef}
                id="armor"
                name="armor"
                defaultValue={this.props.player.armor}
                key={playerId}
              />
            </FormControl>
            <FormControl>
              <InputLabel htmlFor="damage">Damage</InputLabel>
              <Input
                inputRef={this.playerDamageRef}
                id="damage"
                name="damage"
                defaultValue={this.props.player.damage}
                key={playerId}
              />
            </FormControl>
            <FormControl>
              <InputLabel htmlFor="id">Id</InputLabel>
              <Input
                inputRef={this.playerIdRef}
                id="id"
                name="name"
                defaultValue={this.props.player.id}
                key={playerId}
                readOnly
              />
            </FormControl>
          </form>
        </Box>
        <Box className="dialog-actions">
          <Button onClick={this.handleCloseClick}>Close</Button>
          <Button onClick={this.handleSubmit}>Confirm</Button>
        </Box>
      </Dialog>
    );
  }
}

PlayerFormDialog.propTypes = {
  // TODO: Switch PropTypes.shape
  // with PropTypes.instanceOf(Player)
  // After creating a Player class.
  player: PropTypes.shape({
    name: PropTypes.string,
    hp: PropTypes.number,
    initiative: PropTypes.number,
    armor: PropTypes.number,
    damage: PropTypes.number,
    id: PropTypes.number
  }),
  open: PropTypes.bool,
  onClose: PropTypes.func,
  onConfirm: PropTypes.func
};

export default PlayerFormDialog;
