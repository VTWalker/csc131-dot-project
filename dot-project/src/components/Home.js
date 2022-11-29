import React, { Fragment, useEffect, useState } from 'react';
/*import five9logo from'../images/Five-Nine-Logo.png';*/
import Legend from "./Legend";
import './Home.css';
import axios from 'axios';
import Agents from './Agents';
import FrontPage from './FrontPage';

function Home() {
  const [agentData, setAgentData] = useState();

  useEffect(() => {
    async function fetchData() {
      const temp = await axios.get('/agent')
      .then(function (response) {
        // handle success
        console.log(response.data[0].status);
        return response.data;
      }).catch(function (error) {
        // handle error
        console.log(error);
      })
      setAgentData(temp);
    }
    fetchData();
  }, [])
  

  return (
    <React.Fragment>
      <FrontPage />
      <div className="homepage">
        <h1 className="home-header">
          <img className="logo" src={five9logo} />
        </h1>
        <div className="homepage-body">
            {/* <SampleText /> */}
            <div className="dot-container">
              {/* <SampleDots /> */}
              {agentData === null || agentData === undefined ? 
              null :
              <Agents agentData={agentData} />}
            </div>
          <Legend />
        </div>
      </div>
    </React.Fragment>
  )
}

export default Home;