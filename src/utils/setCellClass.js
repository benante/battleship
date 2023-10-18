export const setCellClass = (rowIndex, colIndex, className) => {
    const cell = document.querySelector(
      `.row:nth-child(${rowIndex + 1}) .cell:nth-child(${colIndex + 1}`
    );
    if (cell) {
      cell.className = `cell ${className}`;
    }
  };