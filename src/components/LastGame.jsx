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
      <div className="card border-light-subtle mb-1">
        <div className="card-body row row-cols-3 m-0 p-0">
          <img
            id="home-team-logo"
            src={homeTeamInfo.logo}
            className={`${homeTeamInfo.background_color} card-img-top g-col-3`}
            alt={homeTeamInfo.name}
          ></img>
          <div className="text-center">
            <h6>{homeTeamInfo.abbreviation}</h6>
          </div>
          <div className="text-center">
            <h4>{game.typeOfOt}</h4>
          </div>
          <div className="text-center">
            <h6>{awayTeamInfo.abbreviation}</h6>
          </div>
          <div className="text-center">{game.homeGoals}</div>
          <div></div>
          <div className="text-center">{game.awayGoals}</div>
          <img
            id="away-team-logo"
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
