// import { useState } from 'react';
import './App.css';
import ComputerBoard from './components/computerBoard.jsx';
import PlayerBoard from './components/playerBoard.jsx';

// import Game from './components/Game.jsx';
console.log('ciao');
function App() {
  return (
    <>
      <ComputerBoard />
      <PlayerBoard />
    </>
  );
}

// Ship colours:
// Green for where ship is at beginning
// Red if a hit
// Yellow if a miss

export default App;
