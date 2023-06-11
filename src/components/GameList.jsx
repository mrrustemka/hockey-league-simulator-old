import React from "react";
import GameR from "./GameR";

function GameList({ games }) {
  // console.log("text1", games.homeGoals);
  // console.log("text2", games.awayGoals);

  if (!games.length) {
    return (
      <div>
        <h2>The list is empty</h2>
      </div>
    );
  }
  return (
    <div>
      {games.map((game) => (
        <GameR game={game} key={game.id} />
      ))}
      {games.newGame}
    </div>
  );
}

export default GameList;
