import { setCellClass } from '../utils/setCellClass';
import { winGame } from '../utils/winGame';
import '../../public/styles/board.css';
import { useState } from 'react';

export default function ComputerBoard({ board, onCellClick }) {
  const [boardState, setBoardState] = useState(board);

  const handleCellClick = (rowIndex, colIndex) => {
    const updatedBoardState = [...boardState];
    if (updatedBoardState[rowIndex][colIndex] === 'B') {
      // Clicked on a ship, update the state and class
      updatedBoardState[rowIndex][colIndex] = 'hit';
      setCellClass(rowIndex, colIndex, 'hit-ship');
    } else {
      // Clicked on an empty cell, update the state and class
      updatedBoardState[rowIndex][colIndex] = 'miss';
      setCellClass(rowIndex, colIndex, 'miss-ship');
    }
    setBoardState(updatedBoardState);
    onCellClick(boardState, rowIndex, colIndex);
  };

  winGame();

  return (
    <div className="board computer-board">
      {boardState.map((row, rowIndex) => (
        <div key={rowIndex} className="row">
          {row.map((cell, colIndex) => (
            <div
              key={colIndex}
              className={`cell ${cell === 'B' ? 'ship-cell' : ''} ${cell === 'hit' ? 'hit-ship' : ''}`}
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
