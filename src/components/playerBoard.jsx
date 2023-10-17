import { useState } from 'react';
import '../../public/styles/board.css';
import '../../public/styles/ships.css';
import { placeShip } from '../utils/placeShip.jsx';

export default function PlayerBoard() {
  // Define the initial state of the game board

  // const [board, setBoard] = useState(Array(10).fill(Array(10).fill(null)));
  const [board, setBoard] = useState(
    Array.from({ length: 10 }, () => Array(10).fill(null))
  );

  const handlePlaceShip = () => {
    // Place a battleship on the board when the button is clicked
    placeShip(board, 7); // Adjust the ship length as needed
    setBoard([...board]); // Trigger a state update
  };

  // // Place a battleship of length X on the board after the component mounts
  // placeShip(board, 7);

  // The empty dependency array ensures this effect runs only once
  return (
    <div>
      <button onClick={handlePlaceShip}>Place Battleship</button>

      <div className="board player-board">
        {board.map((row, rowIndex) => (
          <div key={rowIndex} className="row">
            {row.map((cell, colIndex) => (
              // <div key={colIndex} className="cell">
              <div
                key={colIndex}
                className={`cell ${
                  cell === 'B' || cell === 'A' ? 'ship-cell' : ''
                }`}
              >
                {/* Display the contents of each cell here */}
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
