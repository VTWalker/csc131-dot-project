// Format to import files:
// import [File Name] from 'relative path'import logo from "./logo.svg";
import "./App.css";
import five9logo from "./images/Five9-black-logo.jpg";

// File must be imported to
import SampleText from "./components/SampleText";
import SampleDots from "./components/SampleDots";

function App() {
  return (
    <div className="homepage">
      <h1 className="home-header">
        <img className="logo" src={five9logo} />
      </h1>
      <div className="homepage-body">
        <SampleText />
        <div className="dot-container">
          yo
        </div>
        <div className="legend">Legend</div>
        <div>Green: Available</div>
        <div>Red: On Voice Call</div>
        <div>Yellow: After Call Work</div>
        <div>Blue: On Preview Task</div>
        <div>Black: Logged Out</div>
      </div>
    </div>
  );
}

export default App;
