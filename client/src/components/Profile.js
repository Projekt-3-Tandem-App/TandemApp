import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import Navbar from './layout/Navbar'
import { signup } from '../services/auth';
//import UsersList from './UsersList'

export default class Profile extends Component{
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

<h2 class="large text-primary center">Edit your Profile</h2>

<form className="form profile-top" onSubmit={this.handleSubmit}>   

<label htmlFor="username"> </label>   
          <label htmlFor="name" className="m"> name{this.state.name}</label>
          <input
            type="text"
            name="name"
            value={this.state.name}
            onChange={this.handleChange}
            id="name"
            placeholder= {this.state.name}
          />
            <label htmlFor="location" className="m-1"></label>
          <select name="location" id="location" form="carform" onChange={this.handleChange}>
          <option selected>Choose a city</option>
          <option value="berlin">Berlin</option>
          <option value="hambourg">Hamburg</option>
          <option value="paris">Paris</option>
          <option value="london">London</option>
          </select>
          <h2 className="m-3"> Profile Settings </h2>
          
          <label htmlFor="age"> <h3>Choose your age</h3>  
          <input 
            type="Number"
            name="age"
            value={this.state.age}
            onChange={this.handleNumber}
            id="age"
            min="16"
            max="100"
          />
          </label>
          <label htmlFor="gender" className="m-1"></label>
          <select name="gender" id="gender" form="carform" onChange={this.handleChange}>
          <option selected>Choose a gender...</option>
          <option value="female">Female</option>
          <option value="male">Male</option>
          <option value="transgender">Transgender</option>
          </select>
          <label htmlFor="description" className="m"></label>
          <input
             className="form-group" 
            type="text"
            name="description"
            value={this.state.description}
            onChange={this.handleChange}
            id="description"
            placeholder="Write something about you..."
          />
          <label htmlFor="goal"></label>
          <input
            className="form-group" 
            type="text"
            name="goal"
            value={this.state.goal}
            onChange={this.handleChange}
            id="goal"
            placeholder="Your learning goals... "
          />  
         
       
          
 
 
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

/*     <div className="profile-edu bg-white p-2">
        <h1>About me</h1>
        <h2>{this.props.user.name}</h2>
        <p>{this.props.user.age} years odl</p>
        <p> Gender: {this.props.user.gender}</p>
        <p>Live in {this.props.user.location}</p>
        <p>Description: {this.props.user.description}</p>
        <p>Goal: {this.props.user.goal}</p>
        </div>*/

        /*  <div className="profile-grid my-5 container">
        <div className="profile-exp bg-white p-2 center">
        <h2 ><i class="fas fa-user my-1"></i> Settings</h2>
        <ul className="flex-smart " >
        <li><Link to="/profile" className="btn my-1 btn-width">Profile</Link></li>
        <li><Link to="/languages" className="btn my-1 btn-width">Languages</Link></li>
        <li><Link to="/languages" className="btn my-1 btn-width ">Picture </Link></li>
        <li> <Link to="/" className="btn my-1 btn-width">Logout </Link></li>
        </ul> 
        </div>

        
        <section className="profile-edu bg-white p-3">
      <div className="form-group" > 

           <h2 class="large text-primary center">Edit your Profile</h2>
        <form className="form profile-top" onSubmit={this.handleSubmit}>
          <label htmlFor="username"> </label>   
          <label htmlFor="name" className="m"> name{this.state.name}</label>
          <input
            type="text"
            name="name"
            value={this.state.name}
            onChange={this.handleChange}
            id="name"
            placeholder= {this.state.name}
          />
           
          <label htmlFor="location" className="m-1"></label>
          <select name="location" id="location" form="carform" onChange={this.handleChange}>
          <option selected>Choose a city</option>
          <option value="berlin">Berlin</option>
          <option value="hambourg">Hamburg</option>
          <option value="paris">Paris</option>
          <option value="london">London</option>
          </select>


          .
          <h2 className="m-3"> Profile Settings </h2>
        <label htmlFor="age"> <h3>Choose your age</h3>
          <input
            className="form-group" 
            type="Number"
            name="age"
            value={this.state.age}
            onChange={this.handleNumber}
            id="age"
            min="16"
            max="100"
          />  </label>
          <label htmlFor="gender" className="m-1"></label>
          <select name="gender" id="gender" form="carform" onChange={this.handleChange}>
          <option selected>Choose a gender...</option>
          <option value="female">Female</option>
          <option value="male">Male</option>
          <option value="transgender">Transgender</option>
          </select>
          <label htmlFor="description" className="m"></label>
          <input
             className="form-group" 
            type="text"
            name="description"
            value={this.state.description}
            onChange={this.handleChange}
            id="description"
            placeholder="Write something about you..."
          />
          <label htmlFor="goal"></label>
          <input
            className="form-group" 
            type="text"
            name="goal"
            value={this.state.goal}
            onChange={this.handleChange}
            id="goal"
            placeholder="Your learning goals... "
          />   
          <button  className="btn btn-primary m-2" type="submit"> 
          <h3 >Submit changes </h3></button>
          {this.state.message && (
            <h3>{this.state.message}</h3>
          )}
        </form>
        <p class="my-1">
          <Link to="/login" className="text-dark">Delete Profile</Link>
      </p>
      </div>
      </section>
        </div>*/