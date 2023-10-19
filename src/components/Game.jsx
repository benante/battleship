import React, { useState } from 'react';
import { placeShip } from '../utils/placeShip';
import ComputerBoard from './ComputerBoard';
import PlayerBoard from './PlayerBoard';
import PlaceShipButton from './PlaceShipsButton';
import ScoreBoard from './ScoreBoard';
import isEqual from 'lodash/isEqual';
import '../../public/styles/ships.css';
import '../../public/styles/board.css';
import { selectCells } from '../utils/computerSelection';

export default function Game() {
  const [computerBoard, setComputerBoard] = useState(
    Array.from({ length: 10 }, () => Array(10).fill(null))
  );
  const [playerBoard, setPlayerBoard] = useState(
    Array.from({ length: 10 }, () => Array(10).fill(null))
  );
  const [shipsPlaced, setShipsPlaced] = useState(false);
  const [selectedPlayerCell, setSelectedPlayerCell] = useState(null);

  const handlePlaceShips = () => {
    // Place ships on the computer's board
    placeShip(computerBoard, 4, 3);
    setComputerBoard([...computerBoard]);

    // Place ships on the player's board
    placeShip(playerBoard, 4, 3);
    setPlayerBoard([...playerBoard]);

    setShipsPlaced(true);
  };

  const handleCellClick = (clickedBoard, rowIndex, colIndex) => {
    if (isEqual(clickedBoard, computerBoard)) {
      // If it's the computer's board, select a cell from the player's board
      const selectedCell = selectCells(playerBoard);
      // Check if the selected cell is a ship ('B')
      if (playerBoard[selectedCell.coordX][selectedCell.coordY] === 'B') {
        // Update the player's board cell state to 'hit' for a hit
        playerBoard[selectedCell.coordX][selectedCell.coordY] = 'hit';
      } else {
        // Update the player's board cell state to 'miss' for a miss
        playerBoard[selectedCell.coordX][selectedCell.coordY] = 'miss';
      }
      setPlayerBoard([...playerBoard]);
      setSelectedPlayerCell(selectedCell);
    }
    // Here, you can update the computer's board based on the result of the click if needed.
  };

  return (
    <div>
      <ScoreBoard />
      <ComputerBoard board={computerBoard} onCellClick={handleCellClick} />
      <PlaceShipButton onClick={handlePlaceShips} shipsPlaced={shipsPlaced} />
      <PlayerBoard board={playerBoard} selectedCell={selectedPlayerCell} />
    </div>
  );
}
