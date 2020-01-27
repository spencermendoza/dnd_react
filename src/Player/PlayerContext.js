import React, { Component } from 'react';
import { Player } from './player';
import {
  FAKE_PLAYERS,
  updatePlayer,
  sortPlayersBy,
  generateId
} from './playerHelpers';

const PlayerContext = React.createContext();
const { Provider, Consumer } = PlayerContext;

class PlayerProvider extends Component {
  handleAddClick = () => {
    const player = Player.create();
    this.setState({ dialog: { player, open: true } });
  };

  handleEditClick = player => {
    this.setState({ dialog: { player, open: true } });
  };

  handleDialogConfirmClick = player => {
    const updatedPlayers = player.id
      ? updatePlayer(this.state.players, player)
      : [...this.state.players, { ...player, id: generateId() }];
    this.setState({
      players: updatedPlayers,
      dialog: { player: player.create(), open: false }
    });
  };

  handleDialogCancelClick = () => {
    this.setState({ dialog: { player: Player.create(), open: false } });
  };

  handleSortMenuChange = ({ sortBy }) => {
    this.setState({ sortBy });
  };

  state = {
    sortBy: 'name',
    players: FAKE_PLAYERS,
    sortPlayersBy,
    handleAddClick: this.handleAddClick,
    handleEditClick: this.handleEditClick,
    handleSortMenuChange: this.handleSortMenuChange,
    handleDialogCancelClick: this.handleDialogCancelClick,
    handleDialogConfirmClick: this.handleDialogConfirmClick,
    dialog: {
      open: false,
      player: Player.create()
    },
    sortOptions: [
      {
        displayText: 'Initiative Value',
        sortBy: 'initiative'
      },
      {
        displayText: 'HP',
        sortBy: 'hp'
      }
    ]
  };

  render() {
    return <Provider value={this.state}>{this.props.children}</Provider>;
  }
}

export { PlayerContext, PlayerProvider, Consumer as PlayerConsumer };
