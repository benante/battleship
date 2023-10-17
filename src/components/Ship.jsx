import './styles/ship.css';

export default function placeShip(board, shipLength) {
  const numRows = board.length;
  const numCols = board[0].length;

  // Randomly choose starting position
  const row = Math.floor(Math.random() * numRows);
  const col = Math.floor(Math.random() * numCols);

  // Randomly choose orientation (0 for horizontal, 1 for vertical)
  const orientation = Math.floor(Math.random() * 2);

  // Check if the ship can be placed in the chosen position and orientation
  if (
    (orientation === 0 && col + shipLength <= numCols) ||
    (orientation === 1 && row + shipLength <= numRows)
  ) {
    // Place the ship on the board
    for (let i = 0; i < shipLength; i++) {
      if (orientation === 0) {
        board[row][col + i] = 'B';
        // 'B' represents a battleship
      } else {
        board[row + i][col] = 'B';
      }
    }
    return board;
  } else {
    // Try placing the ship again if it doesn't fit
    return placeShip(board, shipLength);
  }
}

// // Example usage
// const initialBoard = Array.from({ length: 10 }, () => Array(10).fill(null));
// const boardWithBattleship = placeShip(initialBoard, 4); // Place a battleship of length 4

