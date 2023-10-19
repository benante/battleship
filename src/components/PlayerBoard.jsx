import '../../public/styles/board.css';
import '../../public/styles/ships.css';
import { setCellClass } from '../utils/setCellClass';

export default function PlayerBoard({ board, selectedCell }) {
  // setCellClass(selectedCell.coordX, selectedCell.coordY, "hit-ship")

  console.log(selectedCell)
  return (
    <div className="player-section">
      <h1>Your Ships!</h1>
    <div className="board player-board">
      {board.map((row, rowIndex) => (
        <div key={rowIndex} className="row">
          {row.map((cell, colIndex) => (
            <div
              key={colIndex}
              className={`cell ${cell === 'B' ? 'ship-cell' : ''} ${selectedCell && selectedCell.coordX === rowIndex && selectedCell.coordY === colIndex ? 'selected-cell' : ''}`}
            >
              {/* Display the contents of each cell here */}
            </div>
          ))}
        </div>
      ))}
      </div>

    </div>
  );
}



// export default function PlayerBoard({ board, rowIndex, colIndex }) {
//   console.log(rowIndex)
//   return (
//     <div className="board player-board">
//       {board.map((row, rowIndex) => (
//         <div key={rowIndex} className="row">
//           {row.map((cell, colIndex) => (
//             <div
//               key={colIndex}
//               className={`cell ${cell === 'B' ? 'ship-cell' : ''}`}
//             >
//               {/* Display the contents of each cell here */}
//             </div>
//           ))}
//         </div>
//       ))}
//     </div>
//   );
// }
