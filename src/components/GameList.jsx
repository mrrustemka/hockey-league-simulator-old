import React, { useState } from "react";
import Game from "./Game";
import Sheet from "./Sheet";
import teamsInfo from "../data/teamsInfo";

function GameList({ games }) {
  let [teams, setTeams] = useState([]);

  function sheetData(newTeams) {
    setTeams([newTeams]);
  }

  let styles;
  teams[0] !== undefined ? (styles = "d-none") : (styles = "d-block mt-5 pt-5");

  return (
    <div>
      <div className={styles}>
        <h2 className="text-center">
          Simulator of Hockey League. You can simulate games. For launch click
          'Simulate' button on any game. You can to select your national team or
          any other:
        </h2>
        <div className="text-center">
          {teamsInfo.map((team) => {
            return (
              <div>
                <h3 className="d-inline-block me-2 mb-0">{team.name}</h3>
                <img src={team.logo} id="sm-logo" className="mb-2" />
              </div>
            );
          })}
        </div>
      </div>
      <Sheet teams={teams} />
      <div id="games">
        {games.map((game) => {
          let homeTeam = teamsInfo.find(
            (element) => element.abbreviation === game.home
          );
          let awayTeam = teamsInfo.find(
            (element) => element.abbreviation === game.away
          );
          let key = game.id;
          return (
            <Game
              home={homeTeam}
              away={awayTeam}
              sheetData={sheetData}
              key={key}
            />
          );
        })}
      </div>
    </div>
  );
}

export default GameList;
