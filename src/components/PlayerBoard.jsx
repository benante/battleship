import React from 'react';
import '../../public/styles/board.css';
import '../../public/styles/ships.css';

export default function PlayerBoard({ board, selectedCell }) {
  return (
    <div className="player-section">
      <h1>Your Ships!</h1>
      <div className="board player-board">
        {board.map((row, rowIndex) => (
          <div key={rowIndex} className="row">
            {row.map((cell, colIndex) => (
              <div
                key={colIndex}
                className={`cell ${cell === 'B' ? 'ship-cell' : ''} ${
                  selectedCell &&
                  selectedCell.coordX === rowIndex &&
                  selectedCell.coordY === colIndex
                    ? 'selected-cell'
                    : ''
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
