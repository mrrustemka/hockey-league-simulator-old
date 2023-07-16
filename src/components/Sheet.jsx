import React from "react";
// import PlayOff from "./PlayOff";
import "bootstrap/dist/css/bootstrap.min.css";

function Sheet({ teams, sheetData }) {
  if (teams[0] !== undefined) {
    let sortTeams = teams;
    let i = 0;

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
        {/* <div className={style}>
          <PlayOff teams={teams[0]} />
        </div> */}
        {/* <button className={style} onClick={() => sheetData(teams[0])}>
          Let's start Play-Off
        </button> */}
      </div>
    );
  }
}

export default Sheet;
