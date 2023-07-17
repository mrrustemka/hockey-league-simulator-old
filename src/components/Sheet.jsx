import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function Sheet({ teams }) {
  teams = teams[0];
  if (teams !== undefined) {
    let sortTeams = teams;
    let i = 0;
    let playOff = false;

    playOff = teams.every((team) => team.game_counter === 1);

    if (playOff === true) {
      return (
        <div className="text-center fixed-top">
          <h1>Play Off</h1>
          <table className="table table-hover table-bordered">
            <thead className="bg-body-secondary">
              <th scope="col">#</th>
              <th scope="col">Team</th>
              <th scope="col">Team Rating</th>
              <th scope="col">GF</th>
              <th scope="col">GA</th>
            </thead>
            {/* {teams[0].map((team) => {
              return (
                <tbody key={team.id}>
                  <tr>
                    <th></th>
                    <th>{team.name}</th>
                    <th>{team.rating * 100}</th>
                    <th className="">{team.goals_for}</th>
                    <th className="">{team.goals_against}</th>
                  </tr>
                </tbody>
              );
            })} */}
            {/* {teams[0].find(
          (element) => element.abbreviation === 
        )} */}
            {console.log(teams[0])}
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
        </div>
      );
    }
  }
}

export default Sheet;
