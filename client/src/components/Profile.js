import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import Navbar from './layout/Navbar'
import { signup } from '../services/auth';
import axios from 'axios';
//import UsersList from './UsersList'

export default class Profile extends Component{
  state = {
    //...this.props.user
    //message: '',
    name: this.props.user.name,

    location: this.props.user.location, 
    age: this.props.user.age,
    gender: this.props.user.gender, 
    description: this.props.user.description, 
    goal: this.props.user.goal 
  }


  handleChange = event => {
    const { name, value } = event.target;
    console.log('STEP 0', event.target)
    this.setState({
      [name]: value
    }) 
    console.log('STEP 1', this.state)
  }

//    handleNumber = event => {
//     let value = event.target.value;
//     this.setState({
//         age : value
//      })
//  }


//  componentDidMount() {
//   this.getUser();
// }

// getUser = () => {
//   console.log('USERS ICI', this.props.match.params)
//   axios.get(`/api/user/${this.props.match.params._id}`)
  
//     .then(response => {
//       console.log("ICI reponse", response)
//       this.setState({
//         user: response.data,
//       })
//     })
//     .catch(err => {
//       console.log(err.response)
//       if (err.response.status === 404) {
//         // we have a 404 error
//         this.setState({
//           error: 'Not found 🤷‍♀️🤷‍♂️'
//         })
//       }
//     })

// }


 //axio put resquet with the dynamic id + setUser
//  Edit profile
// 1. Make a put request to smth like “/edit-profile”
// 1. Make a put request to smith like “/user/:id”
// 2. Update the user, and respond it, so the client can use the updated user information
// 3. Set the updated user information to the state
// 4. Set the updated user information to the parent component state
handleSubmit = event => {
  event.preventDefault();
  console.log('Step 2')
  axios.put(`/api/user/${this.props.user._id}`, { 
    name: this.state.name,
    location: this.state.location,
    age: this.state.age,
    gender: this.state.gender, 
    description: this.state.description, 
    goal: this.state.goal 
  })
  .then(response => {
    console.log("RESPONSE", response)
    // this.setState({
    // name: this.state.name,
    // location: this.state.location,
    // age: this.state.age,
    // gender: this.state.gender, 
    // description: this.state.description, 
    // goal: this.state.goal 
   // })
    // this.getData(); / with some changes
  })
  .catch(err => {
    console.log(err)
  })
}


  // handleSubmit = event => {
  //   event.preventDefault();
  //   const { username, password, name, nativeLanguages, learningLanguages, location, age, gender, description, goal} = this.state;
  //   signup(username, password, name, nativeLanguages, learningLanguages, location, age, gender, description, goal)
  //     .then(user => {
  //       if (user.message) {
  //         this.setState({
  //           message: user.message,
  //           username: '',
  //           password: '',
  //           message: '',
  //           name:'',
  //           nativeLanguages:'',
  //           learningLanguages: [],
  //           location: '', 
  //           age: 0, 
  //           gender: '',
  //           description: '', 
  //           goal: '' 
  //         })
  //       } else {
  //         // the response from the server is a user object -> signup was successful
  //         // we want to put the user object in the state of App.js
  //         console.log(user)
  //         this.props.setUser(user);
  //         this.props.history.push('/');
  //       }
  //     })
  // }


//   state = {
//     message: '',
//     name:'',
//     location: '', 
//     age: 0,
//     gender: '', 
//     description: '', 
//     goal: '' 
//   }
//   handleChange = event => {
//     console.log(event.target)
//     const { name, value } = event.target;
//     this.setState({
//       [name]: value
//     })
//   }
//    handleNumber = event => {
//     let value = event.target.value;
//     this.setState({
//         age : value
//      })
//  }
//   handleSubmit = event => {
//     event.preventDefault();
//     const {name, location, age, gender, description, goal} = this.state;
//     signup(name, location, age, gender, description, goal)
//       .then(user => {
//         if (user.message) {
//           this.setState({
//             message: '',
//             name:'',
//             location: '', 
//             age: 0, 
//             gender: '',
//             description: '', 
//             goal: '' 
//           })
//         } else {
//           // the response from the server is a user object -> signup was successful
//           // we want to put the user object in the state of App.js
//           console.log(user)
//           this.props.setUser(user);
//           this.props.history.push('/');
//         }
//       })
//   }


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


          <label htmlFor="name" className="m"></label>
          <input
            type="text"
            name="name"
            value={this.state.name}
            onChange={this.handleChange}
            id="name"
            //placeholder= {this.state.name}
          />
          
          <select name="location" id="location" form="carform" onChange={this.handleChange}>
          <option selected>{this.state.location}</option>
          <option value="berlin">Berlin</option>
          <option value="hambourg">Hamburg</option>
          <option value="paris">Paris</option>
          <option value="london">London</option>
          </select>
          <h2 className="m-3"> Profile Settings </h2>
          
           
          <input 
            type="number"
            name="age"
            value={this.state.age}
            onChange={this.handleChange}
            id="age"
            min="16"
            max="100"
          />
         
          
          <select name="gender"   id="gender" form="carform" onChange={this.handleChange}>
          <option selected>{this.state.gender}</option>
          <option value="female">Female</option>
          <option value="male">Male</option>
          <option value="transgender">Nonbinary</option>
          </select>

          
          <input
             className="form-group" 
            type="text"
            name="description"
            value={this.state.description}
            onChange={this.handleChange}
            id="description"
            //placeholder={this.state.description}
          />
        
          <input
            className="form-group" 
            type="text"
            name="goal"
            value={this.state.goal}
            onChange={this.handleChange}
            id="goal"
            //placeholder="Your learning goals... "
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
