import React, { useState } from "react";
import Game from "./Game";
import Sheet from "./Sheet";
import teamsInfo from "../data/teamsInfo";

function GameList({ games }) {
  let [teams, setTeams] = useState([]);

  let random = Math.random();
  // if (random > 0.5) {
  //   let box;
  //   box = home;
  //   home = away;
  //   away = box;
  // }

  // console.log(games);

  function sheetData(newTeams) {
    setTeams([newTeams]);
  }

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
