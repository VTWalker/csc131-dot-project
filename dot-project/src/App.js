import "./App.css";
import five9logo from "./images/Five9-black-logo.jpg";
import SampleDots from "./components/SampleDots";
import SampleText from "./components/SampleText";

function App() {
  return (
    <div className="homepage">
      <h1 className="home-header">
        <img className="logo" src={five9logo} />
      </h1>
      <div className="homepage-body">
        <SampleText />
        <div>
          <SampleDots />
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
