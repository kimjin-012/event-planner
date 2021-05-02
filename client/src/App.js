import './App.css';
import React, {useState} from 'react';
import {Router, Link} from '@reach/router'

import Main from './components/Main';
import Map from './components/Maps';
import AddEvent from './components/AddEvent';
import Blank from './components/Blank';

function App() {
  const [change, setChange] = useState(null)
  return (
    <div className="App">
      <div className="topBar navbar navbar-dark bg-primary">
        <h1>Welcome!</h1>
        <Link to="/event/create"><button className="btn btn-outline-success">Add New Event</button></Link>
      </div>
      <div className="selectBar overflow-auto">
        <Main changes={change} setChange={setChange}/>
      </div>
      <div className="displayMap">
        <Router>
          <Blank path="/"/>
          <Map path="/event/:id"/>
          <AddEvent path="/event/create" setChange={setChange}/>
        </Router>
      </div>
    </div>
  );
}

export default App;
