import React from 'react'
import { Fragment } from 'react';
import './AgentList.css';

function AgentList(props) {
  return (
      <div className="single-agent">
        {props.status === 'online' ? 
          <p2>green</p2> :
          props.status === 'offline' ? 
          <p2>red</p2> :
          props.status === 'preview-task' ? 
          <p2>blue</p2> :
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