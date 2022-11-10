import React, { Fragment, useEffect, useState } from 'react';
import five9logo from'../images/Five9-black-logo.jpg';
import Legend from "./Legend";
import './Home.css';
import axios from 'axios';
import Agents from './Agents';

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
      <div className="homepage">
        <h1 className="home-header">
          <img className="logo" src={five9logo} />
        </h1>
        <div className="homepage-body">
          <div className="title-graph">
            {/* <SampleText /> */}
            <div className="dot-container">
              {/* <SampleDots /> */}
              {agentData == null || agentData == undefined ? 
              null :
              <Agents agentData={agentData} />}
            </div>
          </div>
          <Legend />
        </div>
      </div>
    </React.Fragment>
  )
}

export default Home;