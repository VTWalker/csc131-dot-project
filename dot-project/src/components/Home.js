import React, { Fragment, useEffect, useState } from 'react';
import Legend from "./Legend";
import './Home.css';
import axios from 'axios';
import Agents from './Agents';
import FrontPage from './FrontPage';
import FrontPage from './FrontPage';

function Home() {
  const [agentData, setAgentData] = useState();
  const [time, setTime] = useState(Date.now());

  useEffect(() => {
    async function fetchData() {
      const temp = await axios.get('/agent')
      .then(function (response) {
        // handle success
       // console.log(response.data);
      setAgentData(response.data);
      //  return response.data;
      }).catch(function (error) {
        // handle error
        console.log(error);
      })
     // setAgentData(temp);
    }
    fetchData();

    const interval = setInterval(() => setTime(Date.now()), 2000);
  return () => {
    clearInterval(interval);
  };

  }, [time])
  

  return (
    <React.Fragment>
      <FrontPage />
      <div className="homepage">
        <h1 className="home-header">
        </h1>
        <div className="homepage-body">
            {/* <SampleText /> */}
            <div className="dot-container">
              {/* <SampleDots /> */}
              {agentData === null || agentData === undefined ? 
              null :
              <Agents agentData={agentData} />}
            </div>
            {agentData === null || agentData === undefined ? 
              null :
              <Legend agentData={agentData}/>}
        </div>
      </div>
    </React.Fragment>
  )
}

export default Home;