export default function PlaceShipButton({ onClick, shipsPlaced }) {
  return (
    <button onClick={onClick} disabled={shipsPlaced}>
      {shipsPlaced ? 'Ships Placed' : 'Place Battleships'}
    </button>
  );
}
