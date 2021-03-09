import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import Navbar from './layout/Navbar'
import { signup } from '../services/auth';
import axios from 'axios';



//import UsersList from './UsersList'

export default class Languages extends Component{
  state = {
    // name: this.props.user.name,
    // location: this.props.user.location, 
    // age: this.props.user.age,
    // gender: this.props.user.gender, 
    // description: this.props.user.description, 
    // goal: this.props.user.goal, 
    nativeLanguages: this.props.user.nativeLanguages, 
    learningLanguages: this.props.user.learningLanguages
    }

  handleChange = event => {
    console.log(event.target)
    const { name, value } = event.target;
    this.setState({
      [name]: value
    })
  }

  handleSubmit = event => {
    event.preventDefault();
    console.log('Step 2')
    axios.put(`/api/user/${this.props.user._id}`, { 
      //name: this.state.name,
      // location: this.state.location,
      // age: this.state.age,
      // gender: this.state.gender, 
      // description: this.state.description, 
      // goal: this.state.goal, 
      nativeLanguages: this.state.nativeLanguages,
      learningLanguages: this.state.learningLanguages
    })
    .then(response => {
      console.log("RESPONSE", response)
    })
    .catch(err => {
      console.log(err)
    })
  }



  render() {
    return (
      <div>
         <Navbar/>  
        <div className="profile-grid my-5 container">

        <div className="profile-exp bg-white p-2 ">

        <h2 ><i class="fas fa-user my-1"></i> Settings</h2>
        <ul className="flex-smart " >
        <li><Link to="/profile" className="btn my-1 btn-width">Profile</Link></li>
        <li><Link to="/languages" className="btn my-1 btn-width">Languages</Link></li>
        <li><Link to="/languages" className="btn my-1 btn-width ">Picture </Link></li>
        <li> <Link to="/picture" className="btn my-1 btn-width">Logout </Link></li>
        </ul> 
        </div>



        <section className=" profile-edu bg-white p-3">
      <div className="form-group" > 

        <h2 class="large text-primary center ">Edit your Languages</h2>

        <form className="form profile-top" onSubmit={this.handleSubmit}>   
        <h2 className="m-3"> Choose your native Language</h2>
          
          <select name="nativeLanguages" id="nativeLanguages" form="carform" onChange={this.handleChange}>
          <option selected>{this.state.nativeLanguages}</option>
          <option value="english">English</option>
          <option value="french">French</option>
          <option value="german">German</option>
          <option value="italian">Italian</option>
          <option value="spanish">Spanish</option>
          </select>
         
          <select name="learningLanguages" id="learningLanguages" form="carform" onChange={this.handleChange} multiple>
          <option selected>{this.state.learningLanguages}</option>
          <option value="english">English</option>
          <option value="french">French</option>
          <option value="german">German</option>
          <option value="italian">Italian</option>
          <option value="spanish">Spanish</option>
          </select>
         
          <button  className="btn btn-primary m-2" type="submit"> 
          <h3 >Submit changes </h3></button>
          {this.state.message && (
            <h3>{this.state.message}</h3>
          )}
        </form>
     
      </div>
      </section>
        </div>


      </div>


    



    
      
      
    )
  }
}

        
/*  <div className="profile-edu bg-white p-2">
        <h1>Languages</h1>
        <h2>{this.props.user.name}</h2>
        <p>Navite Language : {this.props.user.nativeLanguages}</p>
        <p>Learning Language : {this.props.user.learningLanguages}</p>     
        </div> */