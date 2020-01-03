import React, { Component } from 'react';
// import { PropTypes } from 'prop-types';
// import styled from 'styled-components';

class TurnTimer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isRunning: false,
      elapsedTime: 0,
      previousTime: 0
    };
  }

  handleStopWatch = () => {
    this.setState(prevState => ({
      isRunning: !prevState.isRunning
    }));
    if (!this.state.isRunning) {
      this.setState({ previousTime: Date.now() });
    }
  };

  //   componentDidMount() {
  //     this.intervalID = setInterval(() => this.tick(), 100);
  //   }

  render() {
    return (
      <div>
        <h3>Turn Timer!</h3>
      </div>
    );
  }
}

export default TurnTimer;
