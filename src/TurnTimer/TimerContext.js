import React, { Component } from 'react';
import { FAKE_PLAYERS, togglePlayerActive } from '../Player/playerHelpers';

const TimerContext = React.createContext();
const { Provider, Consumer } = TimerContext;

class TimerProvider extends Component {
  state = {
    minutes: 2,
    seconds: 0,
    handleTimerFunction: this.handleTimerFunction
  };

  handleTimerFunction = () => {
    this.myInterval = setInterval(() => {
      const { seconds, minutes } = this.state;

      if (seconds > 0) {
        this.setState(({ seconds }) => ({
          seconds: seconds - 1
        }));
      }

      if (seconds === 0) {
        if (minutes === 0) {
          clearInterval(this.myInterval);
        } else {
          this.setState(({ minutes }) => ({
            minutes: minutes - 1,
            seconds: 59
          }));
        }
      }
    }, 1000);
  };

  render() {
    return <Provider value={this.state}>{this.props.children}</Provider>;
  }
}

export { TimerContext, TimerProvider, Consumer as TimerConsumer };
