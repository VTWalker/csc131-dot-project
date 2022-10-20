// Format to import files:
// import [File Name] from 'relative path'import logo from "./logo.svg";
import "./App.css";
import five9logo from "./images/Five9-black-logo.jpg";

// File must be imported to
import SampleText from "./components/SampleText";
import SampleDots from "./components/SampleDots";
import Legend from "./components/Legend";

function App() {
  return (
    <div className="homepage">
      <h1 className="home-header">
        <img className="logo" src={five9logo} />
      </h1>
      <div className="homepage-body">
        <div>
          <SampleText />
          <div className="dot-container">
            <SampleDots />
          </div>
        </div>
        <Legend />
      </div>
    </div>
  );
}

export default App;
