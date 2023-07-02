import React, { useState } from "react";
import teamsInfo from "../data/teamsInfo";
import Sheet from "./Sheet";
import "../App.css";

function Game({ home, away }) {
  let [homeGoals, setHomeGoals] = useState(0);
  let [awayGoals, setAwayGoals] = useState(0);
  let [typeOfOt, setTypeOfOt] = useState("");

  function Simulate() {
    let homeRate;
    let awayRate;

    homeRate = home.rating;
    awayRate = away.rating;

    //Goals

    setHomeGoals((homeGoals = Math.round(getRandomInt(0, 9) * homeRate)));
    console.log("home goals", homeGoals);
    setAwayGoals((awayGoals = Math.round(getRandomInt(0, 9) * awayRate)));
    console.log("away goals", awayGoals);
    function getRandomInt(min, max) {
      return Math.floor(Math.random() * (max - min + 1)) + min;
    }
    if (homeGoals - awayGoals >= 5 || awayGoals - homeGoals >= 5) {
      let ran = Math.random();
      if (ran > 0.5) {
        return;
      } else {
        let x = homeGoals;
        setAwayGoals(x);
        console.log("away goals & home goals", homeGoals, awayGoals);
      }
    }

    // OT or S/O

    if (homeGoals === awayGoals) {
      let otGoal = Math.random();
      if (otGoal > 0.5) {
        setHomeGoals((homeGoals += 1));
        console.log("home goals", homeGoals);
        let winner = teamsInfo.find(
          (element) => element.abbreviation === away.abbreviation
        );
        winner.points += 1;
      } else {
        setAwayGoals((awayGoals += 1));
        console.log("away goals", awayGoals);
        let winner = teamsInfo.find(
          (element) => element.abbreviation === home.abbreviation
        );
        winner.points += 1;
      }

      let ran = Math.random();
      if (ran > 0.5) {
        setTypeOfOt((typeOfOt = "Overtime"));
      } else {
        setTypeOfOt((typeOfOt = "Shootout"));
      }
    }

    // Points

    if (homeGoals > awayGoals) {
      let winner = teamsInfo.find(
        (element) => element.abbreviation === home.abbreviation
      );
      winner.points += 2;
    } else {
      let winner = teamsInfo.find(
        (element) => element.abbreviation === away.abbreviation
      );
      winner.points += 2;
    }

    // Goals Stats

    let homeGoalStat = teamsInfo.find(
      (element) => element.abbreviation === home.abbreviation
    );
    homeGoalStat.goals_for += homeGoals;
    homeGoalStat.goals_against += awayGoals;
    homeGoalStat.game_counter += 1;

    let awayGoalStat = teamsInfo.find(
      (element) => element.abbreviation === away.abbreviation
    );
    awayGoalStat.goals_for += awayGoals;
    awayGoalStat.goals_against += homeGoals;
    awayGoalStat.game_counter += 1;

    console.log(
      home.abbreviation,
      " - ",
      away.abbreviation,
      " :",
      homeGoals,
      " - ",
      awayGoals,
      typeOfOt
    );
    setHomeGoals(homeGoals);
    setAwayGoals(awayGoals);
  }

  return (
    <div>
      <div className="text-center">
        <div className="row g-4 m-2">
          <div className="">
            <div className="card border-light-subtle mb-1 ">
              <div id="last-game">
                <img
                  id="home-team-logo"
                  src={home.logo}
                  className={`${home.background_color} card-img-top`}
                  alt={home.name}
                ></img>
                <div className="text-center pt-1" id="home-team">
                  <h6>{home.abbreviation}</h6>
                </div>
                <div className="text-center pt-1 m-auto" id="ot">
                  <h4>{typeOfOt}</h4>
                </div>
                <div className="text-center pt-1" id="away-team">
                  <h6>{away.abbreviation}</h6>
                </div>
                <div className="text-center pb-1" id="home-goals">
                  {homeGoals}
                </div>
                <div className="text-center pb-1" id="away-goals">
                  {awayGoals}
                </div>
                <img
                  id="away-team-logo"
                  src={away.logo}
                  className={`${away.background_color} card-img-top g-col-3`}
                  alt={away.name}
                ></img>
              </div>
            </div>
          </div>
        </div>
        <button onClick={Simulate} type="button" className="btn btn-dark">
          Simulate
        </button>
      </div>
    </div>
  );
}

export default Game;
