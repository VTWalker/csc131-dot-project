import React from 'react'
import { Fragment } from 'react';
import './AgentList.css';

function AgentList(props) {
  
  return (
      <div className="single-agent">
        {props.status === 'available' ? 
          <div className="agent-dot-green"></div> :
          props.status === 'on voice call' ? 
          <div className="agent-dot-red"></div> :
          props.status === 'after call work' ? 
          <div className="agent-dot-yellow"></div> :
          props.status === 'on preview task' ?
          <div className="agent-dot-blue"></div> :
          props.status === 'logged out' ? 
          <div className="agent-dot-black"></div> :
        null}
        <div className="agent-data">
          <p2>ID: {props.id}<br/></p2>
          <p2>Name: {props.name}<br/></p2>
          <p2>Status: {props.status}</p2>
        </div>
      </div>
  )
}

export default AgentList;