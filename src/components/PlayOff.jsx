import React from "react";
import PlayOffGame from "./PlayOffGame";

function PlayOff(teams) {
  teams = teams.teams[0];
  let playOff;
  if (teams != undefined) {
    playOff = teams.every((team) => team.game_counter === 1);

    if (playOff === true) {
      const hTeam_1 = teams[0];
      const aTeam_1 = teams[7];
      const hTeam_2 = teams[1];
      const aTeam_2 = teams[6];
      const hTeam_3 = teams[2];
      const aTeam_3 = teams[5];
      const hTeam_4 = teams[3];
      const aTeam_4 = teams[4];
      return (
        <div>
          <PlayOffGame hTeam={hTeam_1} aTeam={aTeam_1} />
          <PlayOffGame hTeam={hTeam_2} aTeam={aTeam_2} />
          <PlayOffGame hTeam={hTeam_3} aTeam={aTeam_3} />
          <PlayOffGame hTeam={hTeam_4} aTeam={aTeam_4} />
        </div>
      );
    } else {
      return;
    }
  } else {
    return;
  }
}

export default PlayOff;
