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

  let schedule = [];
  teamsInfo.map((teamInfo) => {
    teams.map((team) => {
      if (teamInfo.abbreviation === team) {
        return;
      } else {
        schedule.push(teamInfo.abbreviation + " - " + team);
      }
    });
  });

  const [gamesList] = useState(schedule);

  console.log(gamesList);
  console.log(games);
  deleteGames(games);

  function deleteGames(games) {
    games.map((game) => {
      let a = gamesList.find(
        (element) =>
          game.homeTeam + " - " + game.awayTeam === element ||
          game.awayTeam + " - " + game.homeTeam
      );
      // console.log(game.homeTeam + " - " + game.awayTeam);
      const newArr = gamesList.filter((el) => el !== a);
      console.log(newArr);
    });
  }

  // gamesList.find(
  //   (element) =>
  //     element === game + ' - ' +
  // )?.rating;

  return <div></div>;
};

export default Calendar;
