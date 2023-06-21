import React from "react";
import { useState, useEffect } from "react";
import teams from "../data/teams";

function Calendar() {
  const [data, setData] = useState(teams);
  let teamsList = "";
  let newState = teams.map((team) => {
    teamsList += team.abbreviation + ", ";
    addGames(team.abbreviation);
  });

  function addGames(name) {
    let team = teams.find((element) => element.abbreviation === name);
    team.games.push(teamsList);
  }

  useEffect(() => {
    setData(newState);
  }, []);

  console.log(teams[3].games);

  return <div>{teamsList}</div>;
}

export default Calendar;
