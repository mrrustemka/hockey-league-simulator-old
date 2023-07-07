import React, { useState } from "react";
import Game from "./Game";
import Sheet from "./Sheet";
import teamsInfo from "../data/teamsInfo";

function GameList({ games }) {
  let [teams, setTeams] = useState([]);
  console.log("teams before", teams);

  function sheetData(newTeams) {
    setTeams([newTeams]);
    console.log("sheetData entered", newTeams);
  }
  console.log("teams after", teams);

  return (
    <div>
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
