import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import Navbar from './layout/Navbar'
//import UsersList from './UsersList'

export default class AboutMe extends Component{

  


  render() {
    return (
      <div>
        <Navbar/>
        <h2>Hello</h2>
        <div>
        <li><Link to="/aboutme"  className="btn-dark"> About me</Link></li>
        <Link to="/languages" className="btn-dark">Languages</Link>
        </div>
        <h1>About me</h1>
        <h2>{this.props.user.name}</h2>
        <p>{this.props.user.age} years odl</p>
        <p> Gender: {this.props.user.gender}</p>
        <p>Live in {this.props.user.location}</p>
        <p>Description: {this.props.user.description}</p>
        <p>Goal: {this.props.user.goal}</p>
      </div>
      
      
    )
  }
}