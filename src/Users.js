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
            members: [],
            query: ''
        }
    }
    search = () => {
        this.setState({ members: [] });
        console.log(this.state);
        const FETCH_URL = 'https://dev.snapgroup.co.il/api/members/search';
        axios.post(FETCH_URL, {
            search: this.state.query
        })
            .then((response) => {
                if (response.data.data.length == 0)
                    this.setState({ members: [] });
                else
                    this.setState({ members: response.data.data });
            })
            .catch((response) => {
                console.log(this.state);
            });

    }
    render() {
        return (
            <div>
                <img className="img-circle" style={{ width: "200px", height: "100px" }} src="http://www.snapgroup.co.il/wp-content/uploads/2017/12/Sglogo4.svg" />

                <div className="App-title" style={{fontSize:"100%"}}>חיפוש משתמשים ב SNAPGROUP</div>
                <div className="input-group input-group-lg" style={{ margin: "0 auto", width: "30%", textAlign: "center", marginTop: "20px", marginBottom: "20px" }}>
                    <input
                        className="form-control"
                        type="text"
                        style={{ textAlign: "center" ,height:"50px"}}
                        aria-label="חיפוש.."
                        onKeyPress={(event) => {
                            if (event.key == 'Enter')
                                this.search();
                        }}
                        placeholder="חיפוש.."
                        onChange={event => {
                            this.setState({ query: event.target.value });
                            if (event.target.value.length == 0)
                                this.setState({ members: [] })
                            this.search();


                        }}
                    />

                </div >
                <div id="grad"></div>

               {/*  <div>
                    <button className="btn btn-secondary active" onClick={this.search}>חיפוש</button>
                </div>
 */}

                <div className="container">

                    {
                        this.state.members.map((member, index) => {
                            console.log('check: ' + this.state.members);
                            return (
                                this.state.members.length !== 0 ? <Profile key={member.id} member={member} /> : null
                            )

                        }
                        )}

                </div>
            </div>
        )
    }
}
