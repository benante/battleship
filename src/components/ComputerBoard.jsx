import '../../public/styles/board.css';
// import placeShip from './components/Ship.jsx';


export default function ComputerBoard({board}) {

  // THIS is the right code, that doesn' t show the ships 


  // return (
  //   <div className="board computer-board">
  //     {board.map((row, rowIndex) => (
  //       <div key={rowIndex} className="row">
  //         {row.map((cell, colIndex) => (
  //           <div key={colIndex} className="cell">
  //             {/* Display the contents of each cell here */}
  //           </div>
  //         ))}
  //       </div>
  //     ))}
  //   </div>
  // );


  // This currently does
  return (
    <div className="board player-board">
      {board.map((row, rowIndex) => (
        <div key={rowIndex} className="row">
          {row.map((cell, colIndex) => (
            <div
              key={colIndex}
              className={`cell ${
                cell === 'B' || cell === 'A' ? 'ship-cell' : ''
              }`}
            >
              {/* Display the contents of each cell here */}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}
