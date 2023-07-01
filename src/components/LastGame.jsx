import React from "react";
import teamsInfo from "../data/teamsInfo";
import "../App.css";

function LastGame({ home, away }) {
  // const [home, setHome] = useState("");
  // const [away, setAway] = useState("");
  function Simulate() {
    console.log("entered simulate function");
    let homeGoals = 0;
    let awayGoals = 0;
    let typeOfOt = "";
    let homeRate;
    let awayRate;

    homeRate = home.rating;
    awayRate = away.rating;

    //Goals

    homeGoals = Math.round(getRandomInt(0, 9) * homeRate);
    awayGoals = Math.round(getRandomInt(0, 9) * awayRate);
    function getRandomInt(min, max) {
      return Math.floor(Math.random() * (max - min + 1)) + min;
    }
    if (homeGoals - awayGoals >= 5 || awayGoals - homeGoals >= 5) {
      let ran = Math.random();
      if (ran > 0.5) {
        return;
      } else {
        homeGoals = awayGoals;
      }
    }

    console.log(
      home.abbreviation,
      " - ",
      away.abbreviation,
      " :",
      homeGoals,
      " - ",
      awayGoals
    );
    // OT or S/O

    if (homeGoals === awayGoals) {
      let otGoal = Math.random();
      if (otGoal > 0.5) {
        homeGoals += 1;
        let winner = teamsInfo.find((element) => element.abbreviation === away);
        winner.points += 1;
      } else {
        awayGoals += 1;
        let winner = teamsInfo.find((element) => element.abbreviation === home);
        winner.points += 1;
      }

      let ran = Math.random();
      if (ran > 0.5) {
        typeOfOt = "Overtime";
      } else {
        typeOfOt = "Shootout";
      }
    }

    // // Points

    // if (homeGoals > awayGoals) {
    //   let winner = teamsInfo.find((element) => element.abbreviation === home);
    //   winner.points += 2;
    // } else {
    //   let winner = teamsInfo.find((element) => element.abbreviation === away);
    //   winner.points += 2;
    // }

    // // Goals Stats

    // let homeGoalStat = teamsInfo.find(
    //   (element) => element.abbreviation === home
    // );
    // homeGoalStat.goals_for += homeGoals;
    // homeGoalStat.goals_against += awayGoals;
    // homeGoalStat.game_counter += 1;

    // let awayGoalStat = teamsInfo.find(
    //   (element) => element.abbreviation === away
    // );
    // awayGoalStat.goals_for += awayGoals;
    // awayGoalStat.goals_against += homeGoals;
    // awayGoalStat.game_counter += 1;
  }
  return (
    <div>
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
                {/* <h4>{game.typeOfOt}</h4> */}
              </div>
              <div className="text-center pt-1" id="away-team">
                <h6>{away.abbreviation}</h6>
              </div>
              <div className="text-center pb-1" id="home-goals">
                {/* {game.homeGoals} */}
              </div>
              <div className="text-center pb-1" id="away-goals">
                {/* {game.awayGoals} */}
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
      <button onClick={Simulate}>Simulate</button>
    </div>
  );
}

export default LastGame;
