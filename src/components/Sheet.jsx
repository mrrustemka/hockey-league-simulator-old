import React from "react";
import PlayOff from "./PlayOff";
import "bootstrap/dist/css/bootstrap.min.css";

function Sheet({ teams }) {
  if (teams[0] !== undefined) {
    let sortTeams = teams;
    let i = 0;
    let playOff = false;
    let style;

    {
      teams[0].map((team) => {
        // if (team.game_counter === teams[0].length - 1) {
        if (team.game_counter === 1) {
          playOff = true;
        } else {
          playOff = false;
        }
        console.log("po", playOff);
        return playOff;
      });
      playOff === true
        ? (style = "btn btn-dark d-block")
        : (style = "btn btn-dark d-none");
    }

    sortTeams[0].sort((a, b) => b.points - a.points);
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
          {sortTeams[0].map((team) => {
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
        <PlayOff className={style} teams={teams[0]} />
      </div>
    );
  }
}

export default Sheet;
