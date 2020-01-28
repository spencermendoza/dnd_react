import React, { Component, useContext } from 'react';
import { PlayerContext } from '../Player/PlayerContext';
import { TimerContext } from './TimerContext';

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
    seconds: 0
  };

  // handleActivePlayer = useContext(PlayerContext);

  componentDidMount() {
    // this.myInterval = setInterval(() => {
    //   const { seconds, minutes } = this.state;
    //   if (seconds > 0) {
    //     this.setState(({ seconds }) => ({
    //       seconds: seconds - 1
    //     }));
    //   }
    //   if (seconds === 0) {
    //     if (minutes === 0) {
    //       clearInterval(this.myInterval);
    //     } else {
    //       this.setState(({ minutes }) => ({
    //         minutes: minutes - 1,
    //         seconds: 59
    //       }));
    //     }
    //   }
    // }, 1000);
  }

  render() {
    const { minutes, seconds } = this.state;
    return (
      <div>
        <h1>
          Time Remaining: {minutes}:{seconds < 10 ? `0${seconds}` : seconds}
        </h1>
      </div>
    );
  }
}
