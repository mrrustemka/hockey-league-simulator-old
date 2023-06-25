import React from "react";
import LastGame from "./LastGame";

function GameList({ games }) {
  if (!games.length) {
    return (
      <div className="text-center p-2">
        <h2>Game list is empty</h2>
      </div>
    );
  }
  return (
    <div className="row row-cols-3 row-cols-md-6 g-4 m-2">
      {games.map((game) => (
        <LastGame game={game} key={game.id} />
      ))}
      {games.newGame}
    </div>
  );
}

export default GameList;
