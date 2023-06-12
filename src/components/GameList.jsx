import React from "react";
import GameR from "./LastGame";

function GameList({ games }) {
  if (!games.length) {
    return (
      <div>
        <h2>The list is empty</h2>
      </div>
    );
  }
  return (
    <div className="row row-cols-3 row-cols-md-6 g-4 m-2">
      {games.map((game) => (
        <GameR game={game} key={game.id} />
      ))}
      {games.newGame}
    </div>
  );
}

export default GameList;
