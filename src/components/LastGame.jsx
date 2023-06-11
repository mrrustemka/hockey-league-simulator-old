import React from "react";

function GameR({ game }) {
  return (
    <div className="col">
      <div className="card border-dark mb-1">
        <div className="card-body row row-cols-2">
          <div className="col">
            {game.homeTeam} {game.homeGoals}
          </div>
          <div className="row-2">
            {game.awayTeam} {game.awayGoals}
          </div>
          <div>{game.typeOfOt}</div>
        </div>
      </div>
    </div>
  );
}

export default GameR;
