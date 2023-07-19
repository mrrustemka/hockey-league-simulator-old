import React, { useState } from "react";
import Game from "./Game";
import Sheet from "./Sheet";
import teamsInfo from "../data/teamsInfo";
import { v4 as uuidv4 } from "uuid";

let teamsList = "";
let teams;
let schedule = [{ home: "", away: "" }];

teamsInfo.map((teamInfo) => {
  teamsList += teamInfo.abbreviation + " ";
  return teamsList;
});

teams = teamsList.split(" ", teamsList.split(" ").length - 1);

let i = 0;
teamsInfo.map((teamInfo) => {
  teams.map((team) => {
    if (teamInfo.abbreviation === team) {
      return team;
    } else {
      let game = { id: uuidv4(), home: teamInfo.abbreviation, away: team };
      if (
        schedule.find(
          (element) => element.home === game.away && element.away === game.home
        )
      ) {
        return team;
      } else {
        schedule[i] = game;
      }
    }
    i++;
    return team;
  });
  for (let k = schedule.length - 1; k > 0; k--) {
    let j = Math.floor(Math.random() * (k + 1));
    [schedule[k], schedule[j]] = [schedule[j], schedule[k]];
  }
  return teamInfo;
});

function GameList() {
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
                <img
                  src={team.logo}
                  id="sm-logo"
                  className="mb-2"
                  alt="Team Logo"
                />
              </div>
            );
          })}
        </div>
      </div>
      <Sheet teams={teams} />
      <div id="games">
        {schedule.map((game) => {
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
