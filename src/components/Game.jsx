import { useState } from 'react';
import { placeShip } from '../utils/placeShip';
import ComputerBoard from './ComputerBoard';
import PlayerBoard from './PlayerBoard';
import PlaceShipButton from './PlaceShipsButton';
import ScoreBoard from './ScoreBoard';

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

  const handlePlaceShips = () => {
    // Place ships on the computer's board
    placeShip(computerBoard, 4, 3);
    setComputerBoard([...computerBoard]);

    // Place ships on the player's board
    placeShip(playerBoard, 4, 3);
    setPlayerBoard([...playerBoard]);

    setShipsPlaced(true);
  };
  const [selectedPlayerCell, setSelectedPlayerCell] = useState(null);
  const handleCellClick = (clickedBoard, rowIndex, colIndex) => {
    // Conditionally select a cell if it's playerBoard
    const selectedCell = clickedBoard === playerBoard ? selectCells(clickedBoard) : { coordX: rowIndex, coordY: colIndex };

    // Now you can safely access the coordinates
    const { coordX, coordY } = selectedCell;
    setTimeout(() => {

      console.log("Printing coords from Game:");
      console.log(selectedCell)
    }, 1000);

    // Check if the selected cell is a ship ('B')
    if (clickedBoard[coordX][coordY] === 'B') {
      // Update the selected cell state to 'hit' for a hit
      // and update the board state
      clickedBoard[coordX][coordY] = 'hit';
    } else {
      // Update the selected cell state to 'miss' for a miss
      // and update the board state
      clickedBoard[coordX][coordY] = 'miss';
    }

    // Update the board state based on which board is being clicked
    console.log("clickBoard")
    console.log(clickedBoard)
    if (clickedBoard === playerBoard) {
      setPlayerBoard([...clickedBoard]);
      setSelectedPlayerCell(selectedCell);
      // You can use state to store the selected cell
      // console.log(selectedPlayerCell)
    } else {
      console.log("Computer hit")
      setComputerBoard([...clickedBoard]);
    }

  };
  return (
    <div>
      <ScoreBoard />
      <ComputerBoard board={computerBoard} onCellClick={(rowIndex, colIndex) => handleCellClick(computerBoard, rowIndex, colIndex)} />
      <PlaceShipButton onClick={handlePlaceShips} shipsPlaced={shipsPlaced} />
      <PlayerBoard board={playerBoard} selectedCell={selectedPlayerCell} />
    </div>
  );
}


// const handleCellClick = (clickedBoard, rowIndex, colIndex) => {
//   const selectedCell = selectCells(clickedBoard); // Select a cell on the player board
//   console.log(selectedCell);
//   // Check if the selected player cell is a ship ('B')
//   if (selectedCell === 'B') {
//     // Update the selected player cell state to 'hit' for a hit
//     // and update the player board state
//     clickedBoard[selectedCell.coordX][selectedCell.coordY] = 'hit';
//   } else {
//     // Update the selected player cell state to 'miss' for a miss
//     // and update the player board state
//     clickedBoard[selectedCell.coordX][selectedCell.coordY] = 'miss';
//   }

//   // Update the board state based on which board is being clicked
//   if (clickedBoard === playerBoard) {
//     setPlayerBoard([...clickedBoard]);
//   } else {
//     setComputerBoard([...clickedBoard]);
//   }
// };


