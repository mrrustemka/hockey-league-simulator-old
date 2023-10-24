import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function Sheet({ teams }) {
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
            <th scope="col">Country</th>
            <th scope="col">City</th>
            <th scope="col">G</th>
            <th scope="col">P</th>
            <th scope="col">GF</th>
            <th scope="col">GA</th>
          </thead>
          {sortTeams[0].map((team) => {
            i++;
            return (
              <tbody key={team.id}>
                <tr>
                  <th className={`${team.sheet_background_color}`}>{i}</th>
                  <th className={`${team.sheet_background_color}`}>
                    {team.name}
                  </th>
                  <th className={`${team.sheet_background_color}`}>
                    {team.country}
                  </th>
                  <th className={`${team.sheet_background_color}`}>
                    {team.city}
                  </th>
                  <th className={`${team.sheet_background_color}`}>
                    {team.game_counter}
                  </th>
                  <th className={`${team.sheet_background_color}`}>
                    {team.points}
                  </th>
                  <th className={`${team.sheet_background_color}`}>
                    {team.goals_for}
                  </th>
                  <th className={`${team.sheet_background_color}`}>
                    {team.goals_against}
                  </th>
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
