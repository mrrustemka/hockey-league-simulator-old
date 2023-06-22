import React from "react";
// import { useState, useEffect } from "react";
import teams from "../data/teams";

// function Calendar() {
//   const [data, setData] = useState(teams);
//   let teamsList = "";
//   let newState = teams.map((team) => {
//     teamsList += team.abbreviation + ", ";
//   });

//   addGames(teamsList);

//   function addGames(name) {
//     let team = teams.find((element) => element.abbreviation === name);
//     team.games.push(teamsList);
//   }

//   addGames(teamsList);

//   function addGames(teamsList) {
//     teams.map((team) => {
//       team.games += teamsList;
//     });
//   }

//   useEffect(() => {
//     setData(newState);
//   }, []);

//   console.log(teams);

//   return <div>{teamsList}</div>;
// }

const Calendar = () => {
  let teamsList = "";
  teams.map((team) => {
    teamsList += team.abbreviation + " ";
  });

  let list = teamsList.split(" ", teamsList.split(" ").length - 1);

  teams.map((team) => {
    team.games.push(list);
  });

  console.log(teams);

  return <div></div>;
};

export default Calendar;
