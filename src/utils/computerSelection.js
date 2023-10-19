function randomCPselection() {
  const coordX = Math.floor(Math.random() * 10);
  const coordY = Math.floor(Math.random() * 10);
  return { coordX, coordY };
}


function selectCells(board) {
  const coords = randomCPselection();
  if(board[coords.coordX][coords.coordY] === "hit" || board[coords.coordX][coords.coordY] === "miss") {
    return selectCells(board)
  }
  return coords // Remove the extra pair of square brackets
}



export { selectCells };