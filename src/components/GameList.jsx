import React from "react";
import LastGame from "./Game";
import teamsInfo from "../data/teamsInfo";

function GameList({ games }) {
  return (
    <div id="games">
      {games.map((game) => {
        let homeTeam = teamsInfo.find(
          (element) => element.abbreviation === game.home
        );
        let awayTeam = teamsInfo.find(
          (element) => element.abbreviation === game.away
        );
        return <LastGame home={homeTeam} away={awayTeam} />;
      })}
    </div>
  );
}

export default GameList;
