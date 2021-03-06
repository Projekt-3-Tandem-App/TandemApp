import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import Navbar from './layout/Navbar'
//import UsersList from './UsersList'

export default class Languages extends Component{


  render() {
    return (
      <div>
        <Navbar/>
        <li><Link to="/aboutme">About me</Link></li>
        <li><Link to="/languages">Languages</Link></li>
        <h1>Languages</h1>
        <p>Navite Language : {this.props.user.nativeLanguages}</p>
        <p>Learning Language : {this.props.user.learningLanguages}</p>
      </div>
      
      
    )
  }
}