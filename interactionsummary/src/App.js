// import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect } from 'react'
function App() {
  const  [planets,setPlanets ]= useState()
  
  useEffect(() => {
    fetch(
      "https://interaction-summary.herokuapp.com/summary")
                  .then((res) => res.json())
                  .then((data) => {
                      //console.log(data);
                      // fetchUsers(data)
                      setPlanets(data)
                      // return data;
                  });
                }, [])
var ui = [];
for (var key in planets) {
  if (planets.hasOwnProperty(key)) {
      console.log(key + " -> " + planets[key]);
      ui.push(<li key={key}>{key + " -> " + planets[key]}</li>);
  }
}

  return (
    <div>
        <h1>
        {/* {JSON.stringify(planets)} */}
        {/* {console.log(planets)} */}

          {ui}

        {/* {planets["Communication Services"]} */}
        </h1>  
    </div> 
  );
}

export default App;
