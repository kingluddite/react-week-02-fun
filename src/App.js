import { nflTeams } from "./data/nfl";
import Header from "./components/Header";

const person = {
  firstName: "Phil",
  lastName: "Howley",
};

function App() {
  // console.log(nflTeams);
  return (
    <div>
      <Header person={person} nflTeamsArr={nflTeams} />
      <div>hello from App </div>
    </div>
  );
}

export default App;
