import { useState } from "react";
import GameForm from "./GameForm";
import React from "react";
import GameList from "./GameList";
import { v4 as uuidv4 } from "uuid";
import Calendar from "./Calendar";
import Sheet from "./Sheet";

function Ehl() {
  const [games, setGames] = useState([]);

  const addGameHandler = (
    homeTeam,
    awayTeam,
    homeGoals,
    awayGoals,
    typeOfOt
  ) => {
    const newGame = {
      homeTeam,
      awayTeam,
      homeGoals,
      awayGoals,
      typeOfOt,
      id: uuidv4(),
    };
    setGames([...games, newGame]);
  };

  return (
    <div className="mt-4">
      {/* <GameForm addGame={addGameHandler} /> */}
      <Sheet />
      {/* <Calendar /> */}
      {/* <GameList games={games} /> */}
    </div>
  );
}

export default Ehl;
