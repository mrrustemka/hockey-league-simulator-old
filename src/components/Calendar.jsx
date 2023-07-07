import React from "react";
import GameList from "./GameList";
import teamsInfo from "../data/teamsInfo";
import { v4 as uuidv4 } from "uuid";

let teamsList = "";
let teams;
let schedule = [{ home: "", away: "" }];

teamsInfo.map((teamInfo) => {
  teamsList += teamInfo.abbreviation + " ";
});

teams = teamsList.split(" ", teamsList.split(" ").length - 1);

let i = 0;
teamsInfo.map((teamInfo) => {
  teams.map((team) => {
    if (teamInfo.abbreviation === team) {
      return;
    } else {
      let a = { id: uuidv4(), home: teamInfo.abbreviation, away: team };
      if (
        schedule.find(
          (element) => element.home === a.away && element.away === a.home
        )
      ) {
        return;
      } else {
        schedule[i] = a;
      }
    }
    i++;
  });
});

function Calendar() {
  return (
    <div>
      <GameList games={schedule} />
    </div>
  );
}

export default Calendar;
