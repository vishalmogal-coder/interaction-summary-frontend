// import logo from './logo.svg';
import './App.css';
import graph from './resources/graph.png'
import React, { useState, useEffect } from 'react'
function App() {
  const  [sectors,setSectors ]= useState()
  
  useEffect(() => {
    fetch(
      "https://interaction-summary.herokuapp.com/summary")
                  .then((res) => res.json())
                  .then((data) => {
                      //console.log(data);
                      // fetchUsers(data)
                      setSectors(data)
                      // return data;
                  });
                }, [])
var ui = [];
for (var key in sectors) {
  if (sectors.hasOwnProperty(key)) {
      console.log(key + " -> " + sectors[key]);
      // ui.push(<div className="record" key={key}><p>{key + " -> " + sectors[key]}</p></div>);
      ui.push(<div className="record"><table><tr><td><h3>{key}</h3></td><td><h4>{sectors[key]}%</h4></td></tr></table></div>);
  }
}

  return (
    <div className="body">
      <header><h1>Substantive Research Interaction Dashboard</h1></header>
      {/* <div className='record-header ui-wrapper'>
      <table><tr><td><h2>Sector Name</h2></td><td><h2>Percentage Interaction</h2></td></tr></table>
      </div> */}
      <div className="ui-body">
        <div className="ui-wrapper">
          {ui}
          </div>
          <img src={graph}></img>  
      </div>
    </div>
  );
}

export default App;
