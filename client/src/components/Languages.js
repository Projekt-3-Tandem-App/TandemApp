import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import Navbar from './layout/Navbar'
import { signup } from '../services/auth';



//import UsersList from './UsersList'

export default class Languages extends Component{
  state = {
    username: '',
    password: '',
    message: '',
    name:'',
    nativeLanguages: '', 
    learningLanguages: [],
    location: '', 
    age: 0,
    gender: '', 
    description: '', 
    goal: '' 
  }
  handleChange = event => {
    console.log(event.target)
    const { name, value } = event.target;
    this.setState({
      [name]: value
    })
  }
   handleNumber = event => {
    let value = event.target.value;
    this.setState({
        age : value
     })
 }
  handleSubmit = event => {
    event.preventDefault();
    const { username, password, name, nativeLanguages, learningLanguages, location, age, gender, description, goal} = this.state;
    signup(username, password, name, nativeLanguages, learningLanguages, location, age, gender, description, goal)
      .then(user => {
        if (user.message) {
          this.setState({
            message: user.message,
            username: '',
            password: '',
            message: '',
            name:'',
            nativeLanguages:'',
            learningLanguages: [],
            location: '', 
            age: 0, 
            gender: '',
            description: '', 
            goal: '' 
          })
        } else {
          // the response from the server is a user object -> signup was successful
          // we want to put the user object in the state of App.js
          console.log(user)
          this.props.setUser(user);
          this.props.history.push('/');
        }
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
        <li> <Link to="/" className="btn my-1 btn-width">Logout </Link></li>
        </ul> 
        </div>



        <section className=" profile-edu bg-white p-3">
      <div className="form-group" > 

        <h2 class="large text-primary center ">Edit your Languages</h2>

        <form className="form profile-top" onSubmit={this.handleSubmit}>   
        <h2 className="m-3"> Choose your native Language</h2>
          <label htmlFor="nativeLanguages" className="m"></label>
          <select name="nativeLanguages" id="nativeLanguages" form="carform" onChange={this.handleChange}>
          <option selected> Choose a native language</option>
          <option value="english">English</option>
          <option value="french">French</option>
          <option value="german">German</option>
          <option value="italian">Italian</option>
          <option value="spanish">Spanish</option>
          </select>
          <label htmlFor="learningLanguages" className="m-1"></label>
          <select name="learningLanguages" id="learningLanguages" form="carform" onChange={this.handleChange} multiple>
          <option selected>Choose a learning language</option>
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