import React, { Component } from 'react';
import logo from './logo.svg';
import axios from 'axios';
import './App.css';
import Profile from './Profile';
import { FormGroup, FormControl, InputGroup } from 'react-bootstrap';
export default class Users extends Component {
    constructor(props) {
        super(props);
        this.state = {
            members:[],
          query: ''
        }
      }
      search = () => {
        console.log(this.state);
           const FETCH_URL= 'https://dev.snapgroup.co.il/api/members/search';
           axios.post(FETCH_URL, {
             search: this.state.query
           })
           .then( (response)=> {
             this.setState({members:response.data.data});          
             console.log(this.state);
           })
           .catch((response)=> {
                   console.log(this.state);
             }); 
        
      }
    render() {
        return (
            <div>
                                <img class="img-circle" style={{width:"200px" ,height:"100px"}}src="https://user-images.githubusercontent.com/17565537/34069219-5f5edab0-e254-11e7-9fb3-0530dd6f4fc6.png" />

                        <div className="App-title">חיפוש משתמשים ב SNAPGROUP</div>
        <div className="input-group input-group-lg"  style={{margin:"0 auto",width:"30%",textAlign:"center",marginTop:"20px",marginBottom:"20px"}}>
          <input
            className="form-control"
            type="text"
            style={{textAlign:"center"}}
            aria-label="חפש משתמש.."
            onKeyPress={(event)=>{
                if(event.key=='Enter')
                    this.search();
            }}
            placeholder="חפש משתמש.."
            onChange={event => { this.setState({ query: event.target.value }) }}
          />

           </div >
           <div>
           <button className="btn btn-secondary active"  onClick={this.search}>חיפוש</button>
            </div>
         

            <div class="container">

            {this.state.members.map((member,index)=>{
           return ( 
            <Profile member={member}/>
           )

            }
        )}
        </div>
            </div>
        )
    }
}
