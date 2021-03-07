import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import Navbar from './layout/Navbar'
//import UsersList from './UsersList'

export default class Profile extends Component{


  render() {
    return (
      <div>
        <Navbar/>  
        <div className="profile-grid my-1">
        <div className="profile-exp bg-white p-2">
        <h1> Profile settings </h1>
        <ul>
        <li><Link to="/profile" className="text-primary">About me</Link></li>
        <li><Link to="/languages" className="text-primary">Languages</Link></li>
        <li><Link to="/languages" className="text-primary">Pricture Upload? </Link></li>
        </ul>
        <button>  <Link to="/"> Logout </Link></button>
        
        </div>
        <div className="profile-edu bg-white p-2">
        <h1>About me</h1>
        <h2>{this.props.user.name}</h2>
        <p>{this.props.user.age} years odl</p>
        <p> Gender: {this.props.user.gender}</p>
        <p>Live in {this.props.user.location}</p>
        <p>Description: {this.props.user.description}</p>
        <p>Goal: {this.props.user.goal}</p>

      
        </div>
        </div>


      </div>
    
      
      
    )
  }
}