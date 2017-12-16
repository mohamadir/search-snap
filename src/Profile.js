import React, { Component } from 'react'
import './App.css';

export default class Profile extends Component {
    constructor(props){
        super(props);
        console.log('aaaaaaa');
    }
    render() {
        return (
            <div className="row" style={{display:"flex",float:"left",margin:"40px"}}>
                <div className="profile-header-container">   
    		<div className="profile-header-img">
                <img className="img-circle" style={{width:"40px" ,height:"40px"}}src="https://user-images.githubusercontent.com/17565537/34069100-4bd2150e-e252-11e7-9a94-ea2e6a77d5ba.png" />
                <div className="rank-label-container">
                    <span className="label label-default rank-label">{this.props.member.first_name} {this.props.member.last_name}</span>
                </div>
            </div>
        </div> 
	</div>
        )
    }
}
