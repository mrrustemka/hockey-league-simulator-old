import { useState } from "react";
import teamsArr from "../data/teams";
import GameForm from "./GameForm";
import React from "react";
import GameList from "./GameList";
import { v4 as uuidv4 } from "uuid";

function Ehl() {
  // Sending Team to GameForm

  const [games, setGames] = useState([]);

  const addGameHandler = (
    textHome,
    textAway,
    homeGoals,
    awayGoals,
    typeOfOt
  ) => {
    const newGame = {
      textHome,
      textAway,
      homeGoals,
      awayGoals,
      typeOfOt,
      id: uuidv4(),
    };
    setGames([...games, newGame]);
  };

  return (
    <div className="text-center mt-4">
      <GameForm addGame={addGameHandler} />
      <GameList games={games} />
    </div>
  );
}

export default Ehl;
