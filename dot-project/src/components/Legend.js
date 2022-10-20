import React from 'react'
import { Fragment } from 'react';
import "./Legend.css";

function Legend() {
  return (
    <div className="legend">
        <h1 className="legend-header">Legend</h1>
        <div className="legend-items-container" >
            <div className="green-dot"/>
            <div>Available</div>
        </div>
        <div className="legend-items-container">
            <div className="red-dot" />
            <div>On Voice Call</div>
        </div>
        <div className="legend-items-container">
            <div className="yellow-dot" />
            <div>After Call Work</div>
        </div>
        <div className="legend-items-container">
            <div className="blue-dot"/>
            <div>On Preview Task</div>
        </div>
        <div className="legend-items-container">
            <div className="black-dot"/>
            <div>Logged Out</div>
        </div>
    </div>
  )
}

export default Legend;