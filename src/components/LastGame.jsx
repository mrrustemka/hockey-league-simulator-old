import React from "react";
import teamsArr from "../data/teams";
import "../App.css";

function GameR({ game }) {
  let homeTeamInfo = teamsArr.find(
    (element) =>
      element.abbreviation === game.homeTeam ||
      element.name === game.homeTeam ||
      element.city === game.homeTeam
  );
  let awayTeamInfo = teamsArr.find(
    (element) =>
      element.abbreviation === game.awayTeam ||
      element.name === game.awayTeam ||
      element.city === game.awayTeam
  );
  return (
    <div className="col">
      <div className="card border-dark mb-1">
        <div className="card-body row row-cols-3">
          <img
            src={homeTeamInfo.logo}
            className={`${homeTeamInfo.background_color} card-img-top g-col-3`}
            alt={homeTeamInfo.name}
          ></img>
          <div className="text-center">
            <h6>
              {game.homeTeam} {game.homeGoals}
            </h6>
          </div>
          <div className="text-center">
            <h5>{game.typeOfOt}</h5>
          </div>
          <div className="text-center">
            <h6>
              {game.awayTeam} {game.awayGoals}
            </h6>
          </div>
          <img
            src={awayTeamInfo.logo}
            className={`${awayTeamInfo.background_color} card-img-top g-col-3`}
            alt={awayTeamInfo.name}
          ></img>
        </div>
      </div>
    </div>
  );
}

export default GameR;
