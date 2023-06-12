import { useState } from "react";
import teamsArr from "../data/teams";
import Sheet from "./Sheet";
import "../App.css";

function GameForm({ addGame }) {
  const [homeTeam, setHomeTeam] = useState("");
  const [awayTeam, setAwayTeam] = useState("");

  const onSubmitHandler = (event) => {
    event.preventDefault();
    let homeGoals = 0;
    let awayGoals = 0;
    let typeOfOt = "";

    Game(homeTeam, awayTeam);

    function Game(homeTeam, awayTeam) {
      let homeRate;
      let awayRate;

      homeRate = teamsArr.find(
        (element) => element.abbreviation === homeTeam
      )?.rating;
      awayRate = teamsArr.find(
        (element) => element.abbreviation === awayTeam
      )?.rating;

      //Goals

      homeGoals = Math.round(getRandomInt(0, 9) * homeRate);
      awayGoals = Math.round(getRandomInt(0, 9) * awayRate);
      function getRandomInt(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
      }

      // OT or Shootout

      if (homeGoals === awayGoals) {
        let otGoal = Math.random();
        if (otGoal > 0.5) {
          homeGoals += 1;
          let winner = teamsArr.find(
            (element) => element.abbreviation === awayTeam
          );
          winner.points += 1;
        } else {
          awayGoals += 1;
          let winner = teamsArr.find(
            (element) => element.abbreviation === homeTeam
          );
          winner.points += 1;
        }

        let ran = Math.random();
        if (ran > 0.5) {
          typeOfOt = " OT";
        } else {
          typeOfOt = " Shootout";
        }
      }

      // Points

      if (homeGoals > awayGoals) {
        let winner = teamsArr.find(
          (element) => element.abbreviation === homeTeam
        );
        winner.points += 2;
      } else {
        let winner = teamsArr.find(
          (element) => element.abbreviation === awayTeam
        );
        winner.points += 2;
      }

      // Goals Stats

      let homeGoalStat = teamsArr.find(
        (element) => element.abbreviation === homeTeam
      );
      homeGoalStat.goals_for += homeGoals;
      homeGoalStat.goals_against += awayGoals;
      homeGoalStat.game_counter += 1;

      let awayGoalStat = teamsArr.find(
        (element) => element.abbreviation === awayTeam
      );
      awayGoalStat.goals_for += awayGoals;
      awayGoalStat.goals_against += homeGoals;
      awayGoalStat.game_counter += 1;
    }
    addGame(homeTeam, awayTeam, homeGoals, awayGoals, typeOfOt);
    setHomeTeam("");
    setAwayTeam("");
  };

  return (
    <div className="text-center mt-4">
      <Sheet />
      <form onSubmit={onSubmitHandler}>
        <div className="m-2">
          Home Team:
          <input
            placeholder="Enter Home Team"
            type="text"
            value={homeTeam}
            onChange={(e) => setHomeTeam(e.target.value)}
            className="ms-2 me-2"
          ></input>
        </div>
        <div className="m-2">
          Away Team:
          <input
            placeholder="Enter Away Team"
            type="text"
            value={awayTeam}
            onChange={(e) => setAwayTeam(e.target.value)}
            className="ms-2 me-2"
          ></input>
        </div>
        <button type="submit" title="Submit" className="btn btn-dark mt-4">
          Simulate
        </button>
      </form>
    </div>
  );
}

export default GameForm;
