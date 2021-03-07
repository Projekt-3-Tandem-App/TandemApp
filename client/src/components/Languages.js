import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import Navbar from './layout/Navbar'

//import UsersList from './UsersList'

export default class Languages extends Component{


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
        <button><Link to="/"> Logout </Link></button>
        </div>

        <div className="profile-edu bg-white p-2">
        <h1>Languages</h1>
        <h2>{this.props.user.name}</h2>
        <p>Navite Language : {this.props.user.nativeLanguages}</p>
        <p>Learning Language : {this.props.user.learningLanguages}</p>     
        </div>
        </div>
        </div>
    
      
      
    )
  }
}