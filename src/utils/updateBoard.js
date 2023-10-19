import { setCellClass } from "./setClassClass";

export function updateBoard (updatedBoardState, rowIndex, colIndex, setComputerHitCellCount) {
    if (updatedBoardState[rowIndex][colIndex] === 'B') {
        // Clicked on a ship, update the state and class
        updatedBoardState[rowIndex][colIndex] = 'hit';
        setComputerHitCellCount(hitComputerCellCount + 1);
        setCellClass(rowIndex, colIndex, 'hit-ship');
      } else {
        // Clicked on an empty cell, update the state and class
        updatedBoardState[rowIndex][colIndex] = 'miss';
        setCellClass(rowIndex, colIndex, 'miss-ship');
      }
}