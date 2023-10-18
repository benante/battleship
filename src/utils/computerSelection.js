function randomCPselection() {
  const coordX = Math.floor(Math.random() * 10);
  const coordY = Math.floor(Math.random() * 10);
  return { coordX, coordY };
}

console.log(randomCPselection());

function selectCells(board) {
  const coords = randomCPselection();
  return board[coords.coordX][coords.coordY]; // Remove the extra pair of square brackets
}


export { selectCells };