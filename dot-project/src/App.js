// Format to import files:
// import [File Name] from 'relative path'import logo from "./logo.svg";
import "./App.css";

// File must be imported to
import SampleText from "./components/SampleText";

function App() {
  return (
    <div className="App">
      <SampleText />
      <header className="App-header">
        <img className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
