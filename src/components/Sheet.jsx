import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function Sheet({ teams }) {
  teams = teams[0];
  let [playOff, setPlayOff] = useState(false);

  const changePlayOff = (playOff) => {
    setPlayOff(true);
  };

  if (teams !== undefined) {
    let sortTeams = teams;
    let i = 0;
    let playOffButton;

    playOffButton = "btn btn-dark d-none";

    teams.every((team) => team.game_counter === teams.length -1)
      ? (playOffButton = "btn btn-dark d-block")
      : (playOffButton = "btn btn-dark d-none");

    if (playOff === true) {
      return (
        <div className="text-center fixed-top">
          <h1>Play Off</h1>
          <table className="table table-hover table-bordered d-inline m-2">
            <thead className="bg-body-secondary">
              <th scope="col">#</th>
              <th scope="col">Team</th>
              <th scope="col">Team Rating</th>
              <th scope="col">GF</th>
              <th scope="col">GA</th>
            </thead>
            <tbody>
              <tr>
                <th>1</th>
                <th>{teams[0].name}</th>
                <th>{teams[0].rating * 100}</th>
                <th className="">{teams[0].goals_for}</th>
                <th className="">{teams[0].goals_against}</th>
              </tr>
            </tbody>
            <tbody>
              <tr>
                <th>8</th>
                <th>{teams[7].name}</th>
                <th>{teams[7].rating * 100}</th>
                <th className="">{teams[7].goals_for}</th>
                <th className="">{teams[7].goals_against}</th>
              </tr>
            </tbody>
          </table>
          <table className="table table-hover table-bordered d-inline m-2">
            <thead className="bg-body-secondary">
              <th scope="col">#</th>
              <th scope="col">Team</th>
              <th scope="col">Team Rating</th>
              <th scope="col">GF</th>
              <th scope="col">GA</th>
            </thead>
            <tbody>
              <tr>
                <th>2</th>
                <th>{teams[1].name}</th>
                <th>{teams[1].rating * 100}</th>
                <th className="">{teams[1].goals_for}</th>
                <th className="">{teams[1].goals_against}</th>
              </tr>
            </tbody>
            <tbody>
              <tr>
                <th>7</th>
                <th>{teams[6].name}</th>
                <th>{teams[6].rating * 100}</th>
                <th className="">{teams[6].goals_for}</th>
                <th className="">{teams[6].goals_against}</th>
              </tr>
            </tbody>
          </table>
          <table className="table table-hover table-bordered d-inline m-2">
            <thead className="bg-body-secondary">
              <th scope="col">#</th>
              <th scope="col">Team</th>
              <th scope="col">Team Rating</th>
              <th scope="col">GF</th>
              <th scope="col">GA</th>
            </thead>
            <tbody>
              <tr>
                <th>3</th>
                <th>{teams[2].name}</th>
                <th>{teams[2].rating * 100}</th>
                <th className="">{teams[2].goals_for}</th>
                <th className="">{teams[2].goals_against}</th>
              </tr>
            </tbody>
            <tbody>
              <tr>
                <th>6</th>
                <th>{teams[5].name}</th>
                <th>{teams[5].rating * 100}</th>
                <th className="">{teams[5].goals_for}</th>
                <th className="">{teams[5].goals_against}</th>
              </tr>
            </tbody>
          </table>
          <table className="table table-hover table-bordered d-inline m-2">
            <thead className="bg-body-secondary">
              <th scope="col">#</th>
              <th scope="col">Team</th>
              <th scope="col">Team Rating</th>
              <th scope="col">GF</th>
              <th scope="col">GA</th>
            </thead>
            <tbody>
              <tr>
                <th>4</th>
                <th>{teams[3].name}</th>
                <th>{teams[3].rating * 100}</th>
                <th className="">{teams[3].goals_for}</th>
                <th className="">{teams[3].goals_against}</th>
              </tr>
            </tbody>
            <tbody>
              <tr>
                <th>5</th>
                <th>{teams[4].name}</th>
                <th>{teams[4].rating * 100}</th>
                <th className="">{teams[4].goals_for}</th>
                <th className="">{teams[4].goals_against}</th>
              </tr>
            </tbody>
          </table>
        </div>
      );
    } else {
      sortTeams.sort((a, b) => b.points - a.points);
      return (
        <div className="text-center fixed-top" id="sheet">
          <table className="table table-hover table-bordered">
            <thead className="bg-body-secondary">
              <th scope="col">#</th>
              <th scope="col">Team</th>
              <th scope="col">Team Rating</th>
              <th scope="col">Games</th>
              <th scope="col">Points</th>
              <th scope="col">GF</th>
              <th scope="col">GA</th>
            </thead>
            {sortTeams.map((team) => {
              i++;
              return (
                <tbody key={team.id}>
                  <tr>
                    <th>{i}</th>
                    <th>{team.name}</th>
                    <th>{team.rating * 100}</th>
                    <th>{team.game_counter}</th>
                    <th className="">{team.points}</th>
                    <th className="">{team.goals_for}</th>
                    <th className="">{team.goals_against}</th>
                  </tr>
                </tbody>
              );
            })}
          </table>
          <button
            type="button"
            className={playOffButton}
            onClick={changePlayOff}
          >
            Start Play Off!
          </button>
        </div>
      );
    }
  }
}

export default Sheet;
