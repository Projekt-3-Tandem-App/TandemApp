import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import Navbar from './layout/Navbar'
import { signup } from '../services/auth';
import axios from 'axios';
import { logout } from "../services/auth";



//import UsersList from './UsersList'

export default class Languages extends Component{
  state = {
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

  handleLogout = () => {
    // event.preventDefault();
     logout().then(() => {
       this.props.setUser(null)
       this.props.history.push('/');
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
        <li><Link to="/upload" className="btn my-1 btn-width ">Picture </Link></li>
        <li> <Link to="/" onClick={() => this.handleLogout()} className="btn my-1 btn-width">Logout </Link></li>
        </ul> 
        </div>



        <section className=" profile-edu bg-white p-2">
      <div className="form-group" > 

        <h3 class="large text-primary center my-3-profile p-3">Edit your Languages</h3>

        <form className="form profile-top-profile" onSubmit={this.handleSubmit}>   
    
        <label className="grey" htmlFor="goal">Choose your native Language</label>
          
          <select className="my-3-profile" name="nativeLanguages" id="nativeLanguages" form="carform" onChange={this.handleChange}>
          <option selected>{this.state.nativeLanguages}</option>
          <option value="English">English</option>
          <option value="French">French</option>
          <option value="German">German</option>
          <option value="Italian">Italian</option>
          <option value="Spanish">Spanish</option>
          <option value="Chinese">Chinese</option>
          <option value="Arabic">Arabic</option>
          <option value="Russian">Russian</option>
          <option value="Polish">Polish</option>
          <option value="Portuguese">Portuguese</option>    
          </select>

        
          <label className="grey" htmlFor="goal">Choose your learning Language</label>
         
          <select name="learningLanguages" id="learningLanguages" form="carform" onChange={this.handleChange} >
          <option selected>{this.state.learningLanguages}</option>
          <option value="English">English</option>
          <option value="French">French</option>
          <option value="German">German</option>
          <option value="Italian">Italian</option>
          <option value="Spanish">Spanish</option>
          <option value="Chinese">Chinese</option>
          <option value="Arabic">Arabic</option>
          <option value="Russian">Russian</option>
          <option value="Polish">Polish</option>
          <option value="Portuguese">Portuguese</option>
          </select>
         
          <button  className="btn btn-primary m-3" type="submit"> 
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