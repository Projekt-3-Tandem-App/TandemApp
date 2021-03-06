import React, { Component } from 'react'
import Navbar from './layout/Navbar'
import UsersList from './UsersList'


export default class HomePage extends Component {


  state = {
    username: '',
    password: '',
    message: '',
    name:'',
    nativeLanguages: [], 
    learningLanguages: [],
    location: '', 
    age: 0, 
    description: '', 
    goal: '' 
  }


  render() {
   console.log(this.props, "props at homepage")
    return (
      <div>
        <Navbar/>
        <h1 className= "m-3">HomePage</h1>
        <UsersList {...this.props}/>
      </div>
    )
  }
}