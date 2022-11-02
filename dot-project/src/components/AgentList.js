import React from 'react'
import { Fragment } from 'react';

function AgentList(props) {
  

  return (
      <div>
        <div className="agent-dot" />
        <div>
          <p className="agent-data">{props.id}</p>
          <p className="agent-data">{props.name}</p>
          {props.status == 'online' ? 
          <p>green</p> :
          props.status == 'offline' ? 
          <p>red</p> :
          props.status == 'preview-task' ? 
          <p>blue</p> :
          null}
          <p className="agent-data">{props.status}</p>
        </div>
      </div>
  )
}

export default AgentList;