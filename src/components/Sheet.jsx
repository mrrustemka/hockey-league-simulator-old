import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function Sheet({ teams }) {
  if (teams[0] !== undefined) {
    let sortTeams = teams;
    sortTeams[0].sort((a, b) => b.points - a.points);
    return (
      <div className=" text-center">
        <table className="table table-hover table-bordered">
          <thead className="">
            <th scope="col">Team</th>
            <th scope="col">City</th>
            <th scope="col">Games</th>
            <th scope="col">Points</th>
            <th scope="col">GF</th>
            <th scope="col">GA</th>
          </thead>
          {sortTeams[0].map((team) => {
            return (
              <tbody key={team.id}>
                <tr>
                  <th>{team.name}</th>
                  <th>{team.city}</th>
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

export default Sheet;
