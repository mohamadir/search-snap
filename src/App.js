import React, { Component } from 'react';
import logo from './logo.svg';
import axios from 'axios';
import './App.css';
import Users from './Users';


import { FormGroup, FormControl, InputGroup } from 'react-bootstrap';

class App extends Component {

  render() {

    return (
      <div>
        <div className="my-nav" style={{display:"none"}}>
          <nav className="navbar navbar-toggleable-md navbar-light bg-faded">
            <button className="navbar-toggler navbar-toggler-right" direction="rtl" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <a className="navbar-brand" href="#">האתר שלי</a>
            <div className="collapse navbar-collapse" style={{ display: "flex", justifyContent: "right", direction: "rtl !important" }} id="navbarText">
              <ul className="navbar-nav mr-auto" style={{ direction: "rtl !important" }}>
                <li className="nav-item">
                 
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">תכונות</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">מחירים</a>
                </li>
              </ul>
            </div>
          </nav>
        </div>
        <div className="App">

             <Users/>  
        </div>

        </div>
        );
  }
}

export default App;
