import { useState } from 'react';
import '../../public/styles/board.css';
import '../../public/styles/ships.css';
import { placeShip } from '../utils/placeShip.jsx';

export default function PlayerBoard() {
  // Define the initial state of the game board
  const [board, setBoard] = useState(
    Array.from({ length: 10 }, () => Array(10).fill(null))
  );
  const [shipsPlaced, setShipsPlaced] = useState(false); // State for tracking whether ships have been placed

  const handlePlaceShip = () => {
    // Place a battleship on the board when the button is clicked
    placeShip(board, 4, 3); // board, ship length, number of ships
    setBoard([...board]); // Trigger a state update
    setShipsPlaced(true);
  };

  return (
    <div>
      <button onClick={handlePlaceShip} disabled={shipsPlaced}>
        Place Battleships
      </button>

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
