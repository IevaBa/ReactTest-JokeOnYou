import logo from "./logo.svg";
import "./App.css";
import Jokes from "./components/Jokes/Jokes";

function App() {
  return (
    <div className="main">
      <div className="wrapper">
        <h1>Joke on you !</h1>
        <h2>Jokes</h2>
        <Jokes />
      </div>
    </div>
  );
}

export default App;
