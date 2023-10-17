import React, { useState } from 'react';
import Board from '../components/Board';
import { placeShipsRandomly } from '../utils/helpers';

function Game() {
  // Game logic and state management here

  const [board, setBoard] = useState(placeShipsRandomly());

  return (
    <div className="game">
      <h1>Battleship Game</h1>
      <Board board={board} />
    </div>
  );
}

export default Game;
