export default function PlaceShipButton({ onClick, shipsPlaced }) {
  return <button onClick={onClick} disabled={shipsPlaced}>Place Battleship</button>;
}
