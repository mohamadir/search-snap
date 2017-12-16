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
        <div className="my-nav" >
          <nav className="navbar navbar-toggleable-md navbar-light bg-faded">
            <button className="navbar-toggler navbar-toggler-right"  type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <a className="navbar-brand" style={{marginRight:"30px"}}>סנאפגרופ</a>
            <div className="collapse navbar-collapse"  id="navbarText">
              <ul className="navbar-nav mr-auto" >
                <li className="nav-item">
                  <a className="nav-link" href="#">קצת עלינו</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">קישורים</a>
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
