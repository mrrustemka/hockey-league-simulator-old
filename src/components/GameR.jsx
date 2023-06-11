import React from "react";

function GameR({ game }) {
  return (
    <div>
      {game.textHome} {game.textAway} {game.homeGoals} {game.awayGoals}
      {game.typeOfOt}
    </div>
  );
}

export default GameR;
