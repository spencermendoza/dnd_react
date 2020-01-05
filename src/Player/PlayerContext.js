import React, { Component } from 'react';
import { Player } from './Player';
import { fakePlayers, updatePlayer } from './playerHelpers';

const { Provider, Consumer } = React.createContext();

class PlayerProvider extends Component {
  handleAddClick = () => {
    const player = Player.create();
    this.setState({ dialog: { player, open: true } });
  };

  handleEditClick = player => {
    this.setState({ dialog: { player, open: true } });
  };

  handleDialogConfirmClick = player => {
    const updatedPlayers = updatePlayer(this.state.players, player);
    this.setState({ players: updatedPlayers, dialog: { open: false } });
  };

  handleDialogCancelClick = () => {
    this.setState({ dialog: { player: Player.create(), open: false } });
  };

  handleSortMenuChange = ({ sortBy }) => {
    this.setState({ sortBy });
  };

  state = {
    sortBy: 'name',
    players: fakePlayers.map(playerJson => Player.create(playerJson)),
    dialog: {
      open: false,
      player: Player.create()
    },
    handleAddClick: this.handleAddClick,
    handleEditClick: this.handleEditClick,
    handleDialogCancelClick: this.handleDialogCancelClick,
    handleDialogConfirmClick: this.handleDialogConfirmClick,
    handleSortMenuChange: this.handleSortMenuChange
  };

  render() {
    return <Provider value={this.state}>{this.props.children}</Provider>;
  }
}

export { PlayerProvider, Consumer as PlayerConsumer };
