import React, { Component, useContext } from 'react';
import { PlayerContext } from '../Player/PlayerContext';
import { TimerContext } from './TimerContext';
import Button from '@material-ui/core/Button';

// TODO: Figure out which css in js lib to use.
// Which one would work nicely with Gestures and
// spring?
// const TurnTimer = ({ children }) => {
//   return children ? (
//     children
//   ) : (
//     <div>
//       hi
//       <span>Hi</span>
//       <span>Hi</span>
//       <span>Hi</span>
//       <span>Hi</span>
//     </div>
//   );
// };

export default class TurnTimer extends Component {
  state = {
    minutes: 2,
    seconds: 0,
    bName: 'Start Timer!'
  };

  // handleActivePlayer = useContext(PlayerContext);

  timerStart() {
    this.myInterval = setInterval(() => {
      const { seconds, minutes, bName } = this.state;
      this.setState(({ bName }) => ({
        bName: 'Stop Timer!'
      }));
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
  }

  timerStop() {
    const { bName } = this.state;
    this.setState(({ bName }) => ({
      minutes: 2,
      seconds: 0,
      bName: 'Start Timer!'
    }));
    clearInterval(this.myInterval);
  }

  isTimerRunning() {
    if (this.state.bName == 'Stop Timer!') {
      this.timerStop();
    } else {
      this.timerStart();
    }
  }

  render() {
    const { minutes, seconds, bName } = this.state;
    return (
      <div>
        <Button onClick={() => this.isTimerRunning(bName)}>{bName}</Button>
        <h1>
          Time Remaining: {minutes}:{seconds < 10 ? `0${seconds}` : seconds}
        </h1>
      </div>
    );
  }
}
