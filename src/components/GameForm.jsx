import { useState } from "react";
import teamsArr from "../data/teams";

function GameForm({ addGame }) {
  const [textHome, setTextHome] = useState("");
  const [textAway, setTextAway] = useState("");

  const onSubmitHandler = (event) => {
    event.preventDefault();
    let homeGoals = 0;
    let awayGoals = 0;
    let typeOfOt = "";

    // console.log(text);
    Game(textHome, textAway);

    function Game(textHome, textAway) {
      let homeRate;
      let awayRate;

      homeRate = teamsArr.find(
        (element) => element.abbreviation === textHome
      )?.rating;
      awayRate = teamsArr.find(
        (element) => element.abbreviation === textAway
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
            (element) => element.abbreviation === textAway
          );
          winner.points += 1;
        } else {
          awayGoals += 1;
          let winner = teamsArr.find(
            (element) => element.abbreviation === textHome
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
          (element) => element.abbreviation === textHome
        );
        winner.points += 2;
      } else {
        let winner = teamsArr.find(
          (element) => element.abbreviation === textAway
        );
        winner.points += 2;
      }

      // Goals Stats

      let homeGoalStat = teamsArr.find(
        (element) => element.abbreviation === textHome
      );
      homeGoalStat.goals_for += homeGoals;
      homeGoalStat.goals_against += awayGoals;
      homeGoalStat.game_counter += 1;

      let awayGoalStat = teamsArr.find(
        (element) => element.abbreviation === textAway
      );
      awayGoalStat.goals_for += awayGoals;
      awayGoalStat.goals_against += homeGoals;
      awayGoalStat.game_counter += 1;
    }
    addGame(textHome, textAway, homeGoals, awayGoals, typeOfOt);
    setTextHome("");
    setTextAway("");
  };

  return (
    <div>
      <form onSubmit={onSubmitHandler}>
        <input
          placeholder="Enter Home Team"
          type="text"
          value={textHome}
          onChange={(e) => setTextHome(e.target.value)}
        ></input>
        <input
          placeholder="Enter Away Team"
          type="text"
          value={textAway}
          onChange={(e) => setTextAway(e.target.value)}
        ></input>
        <button type="submit" title="Submit">
          Simulate
        </button>
      </form>
    </div>
  );
}

export default GameForm;
