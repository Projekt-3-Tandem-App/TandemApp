import React, { Component } from 'react'
import Navbar from './layout/Navbar'

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

    


    console.log(this.state.user)
    return (
      <div>
        <Navbar/>
        <h1 className= "m-3">HomePage</h1>
      </div>
    )
  }
}
