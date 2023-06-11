import { useState } from "react";
import teams from "../data/teams";
import "bootstrap/dist/css/bootstrap.min.css";

const App = () => {
  const [data, setData] = useState(teams);

  const updateState = () => {
    let newState = teams.map((team) => {
      return (
        <div>
          <table className="table table-hover table-bordered">
            <thead className="">
              <tr key={team.id}>
                <th>{team.name}</th>
                <th>{team.city}</th>
                <th className="text-center">{team.points}</th>
                <th className="text-center">{team.goals_for}</th>
                <th className="text-center">{team.goals_against}</th>
              </tr>
            </thead>
          </table>
        </div>
      );
    });
    // console.log(newState);
    setData(newState);
    handleSimulate();
  };

  function handleSimulate() {
    setData({ ...data });
  }

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
        {teams.map((team) => {
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
      <button onClick={updateState} className="btn btn-dark">
        Update Result
      </button>
    </div>
  );
};

export default App;
