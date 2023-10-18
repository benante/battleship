import { useState } from 'react';
import { placeShip } from '../utils/placeShip.jsx';
import ComputerBoard from './ComputerBoard';
import PlayerBoard from './PlayerBoard';
import PlaceShipButton from './PlaceShipsButton';
import ScoreBoard from './ScoreBoard';

import '../../public/styles/ships.css';
import '../../public/styles/board.css';

export default function Game() {
  // Define the initial state for computer and player boards
  const [computerBoard, setComputerBoard] = useState(
    Array.from({ length: 10 }, () => Array(10).fill(null))
  );

  const [playerBoard, setPlayerBoard] = useState(
    Array.from({ length: 10 }, () => Array(10).fill(null))
  );

  const [shipsPlaced, setShipsPlaced] = useState(false);
  // const [hitComputerCellCount, setComputerHitCellCount] = useState(0);
  // const [hitPlayerCellCount, setPlayerHitCellCount] = useState(0);

  const handlePlaceShips = () => {
    // Place ships on the computer's board
    placeShip(computerBoard, 4, 3); // Adjust the ship length as needed
    setComputerBoard([...computerBoard]); // Trigger a state update for the computer's board

    // Place ships on the player's board
    placeShip(playerBoard, 4, 3); // Adjust the ship length as needed
    setPlayerBoard([...playerBoard]); // Trigger a state update for the player's board
    setShipsPlaced(true);
  };

  return (
    <div>
      <ScoreBoard />
      <ComputerBoard board={computerBoard} />
      <PlaceShipButton onClick={handlePlaceShips} shipsPlaced={shipsPlaced} />
      <PlayerBoard board={playerBoard} />
    </div>
  );
}
