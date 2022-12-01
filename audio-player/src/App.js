import logo from "./logo.svg";
import "./App.css";
import Play from "./components/Play";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Play />
      </header>
    </div>
  );
}

export default App;
