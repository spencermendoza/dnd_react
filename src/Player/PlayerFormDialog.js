import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import DialogTitle from '@material-ui/core/DialogTitle';
import Dialog from '@material-ui/core/Dialog';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';

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
      initiative: parseInt(this.playerInitiativeRef.current.value, 10),
      hp: parseInt(this.playerHpRef.current.value, 10),
      armor: parseInt(this.playerArmorRef.current.value, 10),
      damage: parseInt(this.playerDamageRef.current.value, 10),
      id: parseInt(this.playerIdRef.current.value, 10)
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
            <label htmlFor="name">
              <input
                ref={this.playerNameRef}
                name="name"
                type="text"
                defaultValue={this.props.player.name}
                key={playerId}
              />
            </label>
            <label htmlFor="initiative">
              <input
                ref={this.playerInitiativeRef}
                name="initiative"
                type="number"
                defaultValue={this.props.player.initiative}
                key={playerId}
              />
            </label>
            <label htmlFor="hp">
              <input
                ref={this.playerHpRef}
                name="hp"
                type="number"
                defaultValue={this.props.player.hp}
                key={playerId}
              />
            </label>
            <label htmlFor="armor">
              <input
                ref={this.playerArmorRef}
                name="armor"
                type="number"
                defaultValue={this.props.player.armor}
                key={playerId}
              />
            </label>
            <label htmlFor="damage">
              <input
                ref={this.playerDamageRef}
                name="damage"
                type="number"
                defaultValue={this.props.player.damage}
                key={playerId}
              />
            </label>
            <label htmlFor="id">
              <input
                ref={this.playerIdRef}
                name="id"
                type="number"
                defaultValue={this.props.player.id}
                key={playerId}
                disabled
              />
            </label>
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
