import React from 'react'
import { Fragment } from 'react';
import "./Legend.css";

function Legend(props) {
  let data = props.agentData.data;
  let available = 0;
    let voicecall = 0;
    let loggedout = 0;
    let aftercall = 0;
    let onpreview = 0;
    for(let i = 0; i< data.length; i++){
      console.log("data[i]['status']: ",data[i]['status']);
        if(data[i]['status'] === "available"){
            available += 1;
        }
        if(data[i]['status'] === "logged out"){
           
            loggedout += 1;
        }
        if(data[i]['status'] === "on preview task"){
           
          onpreview += 1;
       }
       if(data[i]['status'] === "after call work"){
           
        aftercall += 1;
      }
      if(data[i]['status'] === "on voice call"){
           
        voicecall += 1;
      }
    }
  return (
    
    <div className="legend">
        <link href="https://fonts.cdnfonts.com/css/product-sans" rel="stylesheet"></link>
        <div className="legend-items-container" >
        <div id='mySidenav' class="sidenav">
        <a href="#" id ="available">Available {available}</a>
        <a href="#" id ="onvoicecall">On Voice Call {voicecall}</a>
        <a href="#" id ="aftercallwork">After Call Work {aftercall}</a>
        <a href="#" id ="onpreview">On Preview Task {onpreview}</a>
        <a href="#" id ="loggedout">Logged out {loggedout}</a>
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
