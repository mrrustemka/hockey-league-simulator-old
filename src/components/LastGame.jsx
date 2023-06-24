import React from "react";
import teamsArr from "../data/teamsInfo";
import "../App.css";

function LastGame({ game }) {
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
    <div className="">
      <div className="card border-light-subtle mb-1">
        <div id="last-game">
          <img
            id="home-team-logo"
            src={homeTeamInfo.logo}
            className={`${homeTeamInfo.background_color} card-img-top`}
            alt={homeTeamInfo.name}
          ></img>
          <div className="text-center pt-1" id="home-team">
            <h6>{homeTeamInfo.abbreviation}</h6>
          </div>
          <div className="text-center pt-1 m-auto" id="ot">
            <h4>{game.typeOfOt}</h4>
          </div>
          <div className="text-center pt-1" id="away-team">
            <h6>{awayTeamInfo.abbreviation}</h6>
          </div>
          <div className="text-center pb-1" id="home-goals">
            {game.homeGoals}
          </div>
          <div className="text-center pb-1" id="away-goals">
            {game.awayGoals}
          </div>
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

export default LastGame;
