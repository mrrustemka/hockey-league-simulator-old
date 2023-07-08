import React from "react";
import GameList from "./GameList";
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

function Calendar() {
  return (
    <div>
      <GameList games={schedule} />
    </div>
  );
}

export default Calendar;
