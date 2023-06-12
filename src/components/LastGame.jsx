import React from "react";
import teamsArr from "../data/teams";
// import aik from "../images/aik.png";
// import fro from "../images/fro.png";
// import lak from "../images/lak.png";
// import ore from "../images/ore.png";

function GameR({ game }) {
  let homeTeamLogo;
  // let awayTeamLogo;

  let home = teamsArr.find((element) => element.abbreviation === game.homeTeam);
  home.logo = homeTeamLogo;
  return (
    <div className="col">
      <div className="card border-dark mb-1">
        <div className="card-body row row-cols-2">
          <img src={homeTeamLogo} class="card-img-top" alt="..."></img>
          <div>
            {game.homeTeam} {game.homeGoals}
          </div>
          <div>
            {game.awayTeam} {game.awayGoals}
          </div>
          <div>{game.typeOfOt}</div>
        </div>
      </div>
    </div>
  );
}

export default GameR;
