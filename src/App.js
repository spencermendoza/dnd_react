import React, {Component} from 'react';
import Cards from './Cards';
import { Provider } from './Context';

import logo from './logo.svg';
import './App.css';

class App extends Component {
  state = {
    players: [
      {
        name: "Cronan",
        armor: 18,
        hp: 158,
        init: 18,
        damage: 72,
        id: 0
      },
      {
        name: "Balazar",
        armor: 20,
        hp: 127,
        init: 15,
        damage: 32,
        id: 1
      },
      {
        name: "Marsk",
        armor: 19,
        hp: 114,
        init: 7,
        damage: 56,
        id: 2
      },
      {
        name: "Barri",
        armor: 15,
        hp: 69,
        init: 14,
        damage: 12,
        id: 3
      }
    ]
  }

  render() {
    return (
      <Provider value={{
        players: this.state.players,
        actions: {}
      }}>
        <div>
          <Cards></Cards>
        </div>
      </Provider>
    );
  }
}

//   function App() {
//     return (
//       <div className="App">
//         <header className="App-header">
//           <img src={logo} className="App-logo" alt="logo" />
//           <p>
//             Edit <code>src/App.js</code> and save to reload.
//           </p>
//           <a
//             className="App-link"
//             href="https://reactjs.org"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             Learn React
//           </a>
//         </header>
//       </div>
//     );
//   }
// }

export default App;
