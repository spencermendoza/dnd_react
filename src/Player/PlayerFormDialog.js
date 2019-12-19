import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import DialogTitle from '@material-ui/core/DialogTitle';
import Dialog from '@material-ui/core/Dialog';
import Button from '@material-ui/core/Button';
import PlayerForm from './PlayerForm';

class PlayerFormDialog extends Component {
  constructor(props) {
    super(props);
    this.state = { player: {} };
  }

  componentDidMount() {
    console.log('player from dialog didmount', this.props.player);
  }

  handleCloseClick = () => {
    this.props.onClose(null);
  };

  handleConfirmClick = () => {
    this.props.onConfirm(this.state.player);
  };

  handleFormChange = event => {
    const name = event.target.name;
    const value = event.target.value;
    console.log('name and value from form change method');
    console.log('name', name);
    console.log('value', value);
    this.setState((state, props) => ({
      ...state,
      player: {
        [name]: value
      }
    }));
  };

  render() {
    return (
      <Dialog open={this.props.open}>
        <DialogTitle>Editing: {this.state.player.name}</DialogTitle>
        <PlayerForm player={this.state.player} onFormChange={this.handleFormChange} />
        <Button onClick={this.handleCloseClick}>Close</Button>
        <Button onClick={this.handleConfirmClick}>Confirm Changes</Button>
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
    damage: PropTypes.number
  }),
  open: PropTypes.bool,
  onClose: PropTypes.func,
  onConfirm: PropTypes.func
};

export default PlayerFormDialog;
