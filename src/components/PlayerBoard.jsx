import '../../public/styles/board.css';
import '../../public/styles/ships.css';

export default function PlayerBoard({ board }) {
  return (
    <div className="player-section">
      <h1>Your Ships!</h1>
      <div className="board player-board">
        {board.map((row, rowIndex) => (
          <div key={rowIndex} className="row">
            {row.map((cell, colIndex) => (
              <div
                key={colIndex}
                className={`cell ${cell === 'B' ? 'ship-cell' : ''}`}
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
