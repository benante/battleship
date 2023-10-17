import { useState } from 'react';


import '../../public/styles/board.css';

export default function PlayerBoard() {
  // Define the initial state of the game board

  // const [board, setBoard] = useState(Array(10).fill(Array(10).fill(null)));
  const [board, setBoard] = useState(
    Array.from({ length: 10 }, () => Array(10).fill(null))
  );

    // Place a battleship of length X on the board after the component mounts
    placeShip(board, 7)

  // The empty dependency array ensures this effect runs only once
  return (
    <div className="board player-board">
      {board.map((row, rowIndex) => (
        <div key={rowIndex} className="row">
          {row.map((cell, colIndex) => (
            <div key={colIndex} className="cell">
              {/* Display the contents of each cell here */}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}

// Function to place a ship on the board
function placeShip(board, shipLength) {
  const numRows = board.length;
  const numCols = board[0].length;

  // Randomly choose starting position
  const row = Math.floor(Math.random() * numRows);
  const col = Math.floor(Math.random() * numCols);

  // Randomly choose orientation (0 for horizontal, 1 for vertical)
  const orientation = Math.floor(Math.random() * 2);

  // Check if the ship can be placed in the chosen position and orientation
  if (
    (orientation === 0 && col + shipLength <= numCols) || (orientation === 1 && row + shipLength <= numRows)
  ) {
    // Place the ship on the board
    for (let i = 0; i < shipLength; i++) {
      console.log(shipLength)
      if (orientation === 0) {
        board[row][col + i] = 'B';
        // 'B' represents a battleship
      } else {
        board[row + i][col] = 'A';
      }
    }
    console.log("BOARD" + board);
    return board;
  } else {
    // Try placing the ship again if it doesn't fit
    console.log('Else clause running');
    return placeShip(board, shipLength);
  }
}
