import './App.css'
import React from "react";
import Intro from './Intro';
import Kitchen from './Kitchen';
import Bath from './Bath';
import Dining from './Dining';
import Patio from './Patio';

let introBox = 'This is a site showing the projects I have completed on my house over the last 10 years'


function App() {

  return (
    <>
      <div>
        <h1>JMA26 Portfolio</h1>
      </div>
      <div>
        <h3 id="introbox">{introBox}</h3>
      </div>
      <div>
        <Intro/>
        <Kitchen/>
        <Dining/>
        <Bath/>
        <Patio/>
      </div>
      <div>
        
      </div>

    </>
  )
}

export default App
