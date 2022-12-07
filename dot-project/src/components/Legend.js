import React from 'react'
import { Fragment } from 'react';
import "./Legend.css";

function Legend() {
  return (
    
    <div className="legend">
        <link href="https://fonts.cdnfonts.com/css/product-sans" rel="stylesheet"></link>
        <div className="legend-items-container" >
        <div id='mySidenav' class="sidenav">
        <a href="#" id ="available">Available</a>
        <a href="#" id ="onvoicecall">On Voice Call</a>
        <a href="#" id ="aftercallwork">After Call Work</a>
        <a href="#" id ="onpreview">On Preview Task</a>
        <a href="#" id ="loggedout">Logged out</a>
        </div>
        <div className="legend-items-container:hover">
        </div>
        
        </div>
        <div className="legend-items-container">

        </div>
        <div className="legend-items-container">

        </div>
        <div className="legend-items-container">

        </div>
        <div className="legend-items-container">

        </div>
    </div>
    
    
  )

  }

export default Legend;
