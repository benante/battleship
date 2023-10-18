import '../../public/styles/board.css';
import { useState } from 'react';
// import placeShip from './components/Ship.jsx';

export default function ComputerBoard({ board }) {
  const [boardState, setBoardState] = useState(board);
  const [hitComputerCellCount, setComputerHitCellCount] = useState(0);

  const handleCellClick = (rowIndex, colIndex) => {
    const updatedBoardState = [...boardState];
    if (updatedBoardState[rowIndex][colIndex] === 'B') {
      // Clicked on a ship, update the state and class
      updatedBoardState[rowIndex][colIndex] = 'hit';
      setComputerHitCellCount(hitComputerCellCount + 1);
      console.log(board);
      setCellClass(rowIndex, colIndex, 'hit-ship');
    } else {
      // Clicked on an empty cell, update the state and class
      updatedBoardState[rowIndex][colIndex] = 'miss';
      setCellClass(rowIndex, colIndex, 'miss-ship');
    }
    setBoardState(updatedBoardState);
  };

  const setCellClass = (rowIndex, colIndex, className) => {
    const cell = document.querySelector(
      `.row:nth-child(${rowIndex + 1}) .cell:nth-child(${colIndex + 1}`
    );
    if (cell) {
      cell.className = `cell ${className}`;
    }
  };

  console.log('hitComputerCellCount:', hitComputerCellCount);
  function winGame() {
    if (hitComputerCellCount === 12) {
      alert('You beat the computer!');
    }
  }

  winGame();
  return (
    <div className="board computer-board">
      {boardState.map((row, rowIndex) => (
        <div key={rowIndex} className="row">
          {row.map((cell, colIndex) => (
            <div
              key={colIndex}
              className={`cell ${cell === 'B' ? 'ship-cell' : ''} ${
                cell === 'hit' ? 'hit-ship' : ''
              }`}
              // className={`cell ${cell === 'B' ? 'ship-cell' : ''}`}
              onClick={() => handleCellClick(rowIndex, colIndex)}
            >
              {/* Display the contents of each cell here */}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}
