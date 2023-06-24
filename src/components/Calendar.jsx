import { useState } from "react";
import React from "react";
import teamsInfo from "../data/teamsInfo";
import teams from "../data/teams";
import gamesList from "../data/gamesList";

const Calendar = ({ games }) => {
  let teamsList = "";
  teamsInfo.map((teamInfo) => {
    teamsList += teamInfo.abbreviation + " ";
  });

  let list = teamsList.split(" ", teamsList.split(" ").length - 1);

  const [teams] = useState(list);
  let [gamesList, setGamesList] = useState();

  console.log(teams);

  function add(gamesList) {
    teams.map((team) => {
      setGamesList(teamsInfo.abbreviation + "-" + team);
    });
  }
  console.log(gamesList)

  return <div></div>;
};

export default Calendar;
