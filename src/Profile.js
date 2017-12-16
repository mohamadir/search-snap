import React, { Component } from 'react'
import './App.css';

export default class Profile extends Component {
    constructor(props){
        super(props);
        console.log('aaaaaaa');
    }
    render() {
        return (
            <div class="row" style={{display:"flex",float:"left",margin:"40px"}}>
                <div class="profile-header-container">   
    		<div class="profile-header-img">
                <img class="img-circle" style={{width:"100px" ,height:"100px"}}src="https://user-images.githubusercontent.com/17565537/34069100-4bd2150e-e252-11e7-9a94-ea2e6a77d5ba.png" />
                <div class="rank-label-container">
                    <span class="label label-default rank-label">{this.props.member.first_name} {this.props.member.last_name}</span>
                </div>
            </div>
        </div> 
	</div>
        )
    }
}
