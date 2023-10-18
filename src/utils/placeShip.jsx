// Function to place a specific number of ships on the board
export function placeShip(board, shipLength, numOfShips) {
  const numRows = board.length;
  const numCols = board[0].length;

  for (let ship = 0; ship < numOfShips; ship++) {
    placeSingleShip(board, shipLength, numRows, numCols);
  }

  return board;
}

// Function to place a single ship on the board
function placeSingleShip(board, shipLength, numRows, numCols) {
  let placed = false;
  let row, col, orientation;

  while (!placed) {
    // Randomly choose starting position
    row = Math.floor(Math.random() * numRows);
    col = Math.floor(Math.random() * numCols);

    // Randomly choose orientation (0 for horizontal, 1 for vertical)
    orientation = Math.floor(Math.random() * 2);

    if (
      canPlaceShip(orientation, col, row, shipLength, numCols, numRows, board)
    ) {
      for (let i = 0; i < shipLength; i++) {
        if (orientation === 0) {
          board[row][col + i] = 'B';
          // 'B' represents a battleship
        } else {
          board[row + i][col] = 'B';
        }
      }
      placed = true;
    }
  }
}

// Function to check if a ship can be placed in the chosen position and orientation
function canPlaceShip(
  orientation,
  col,
  row,
  shipLength,
  numCols,
  numRows,
  board
) {
  if (
    (orientation === 0 && col + shipLength > numCols) ||
    (orientation === 1 && row + shipLength > numRows)
  ) {
    return false; // Ship would go out of bounds
  }

  if (orientation === 0) {
    // Check for horizontal placement
    for (let i = 0; i < shipLength; i++) {
      if (board[row][col + i] === 'B') {
        return false; // Ship would overlap with another ship
      }
    }
  } else {
    // Check for vertical placement
    for (let i = 0; i < shipLength; i++) {
      if (board[row + i][col] === 'B') {
        return false; // Ship would overlap with another ship
      }
    }
  }

  return true;
}
