import { useState } from 'react';
import { placeShip } from '../utils/placeShip';
import ComputerBoard from './ComputerBoard';
import PlayerBoard from './PlayerBoard';
import PlaceShipButton from './PlaceShipsButton';
import ScoreBoard from './ScoreBoard';

import '../../public/styles/ships.css';
import '../../public/styles/board.css';

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

  return (
    <div>
      <ScoreBoard />
      <ComputerBoard board={computerBoard} />
      <PlaceShipButton onClick={handlePlaceShips} shipsPlaced={shipsPlaced} />
      <PlayerBoard board={playerBoard} />
    </div>
  );
}
