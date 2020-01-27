import React, { Component } from 'react';
// import { FAKE_PLAYERS } from './playerHelpers';

const TimerContext = React.createContext();
const { Provider, Consumer } = TimerContext;

class TimerProvider extends Component {
  state = {
    minutes: 2,
    seconds: 0
  };
}
