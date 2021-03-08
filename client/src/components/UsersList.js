import React, { Component } from 'react'
import axios from 'axios';
import {Link} from 'react-router-dom'






export default class UsersList extends Component {

  state = {
    currentUser: this.props.user,
    users: [], 
    showfilter: false,
  }



  componentDidMount(){
    this.getUsers()
  }
  getUsers = async () => {
    //console.log("route triggered to fget users")
    let response = await axios.get('/api/users')
    //console.log(response, "response at FE")
    let {data} = response;
    //console.log(data, "userlsit at FE")
    this.setState({users: data})
  }

  toggleFilterHandler = () => {
    const doesShow = this.state.showfilter;
   this.setState( {showfilter : !doesShow})
 }
 
  render() {
    console.log(this.props, "props at userslist")

   
 

  
    return (
      <div> 

      <div className="flexbox m-3 "  >
     
      <h1 className=" m-3">Language Learners</h1>
          <div >
          <a href="/" 
      className="btn btn-primary"
      clicked={this.toggleFilterHandler}
      > <i className="fas fa-sliders-h  margin-y"></i> </a>
        </div>
   


      </div>
      <div>
        <form className="form profile-top" >
         <label htmlFor="location" className="m-1"></label>
          <select name="location" id="location" form="carform" onChange={this.handleChange}>
          <option selected>Choose a city</option>
          <option value="berlin">Berlin</option>
          <option value="hambourg">Hamburg</option>
          <option value="paris">Paris</option>
          <option value="london">London</option>
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
        </form>
      </div>

      {this.state.users.length === 0 ? (
        <div>Loading.....</div>
      ):
      
       (
       
      this.state.users.map((user, index) => {
          return (
            <div  className="profiles" key={index} >
            <div className= "profile bg-light" >
          <img
            className="round-img "
            src="https://www.iass-potsdam.de/sites/default/files/styles/square_round_2_up/public/default_images/default_avatar_0.png?itok=ytiGDvoH"
            alt=""
          />
          <div className="padding">
            <h2 className="my-1">{user.name}</h2>
            <h3> Age:{user.age}</h3>
            <h3> Gender: {user.gender}</h3>
            <h3> Location: {user.location}</h3>
            <Link to="/showprofil"  className="btn  btn-dark my-2">View Profile</Link>
            <Link to={`/users/${user._id}`}  className="btn  btn-dark my-2">View Profile</Link>
            
          </div>
          <ul>
            <li className="text-primary">
              <p className="grey"> <i class="far fa-comments text-secondary "></i>Speaks</p>
              <h3>{user.nativeLanguages}</h3>
            </li>

            <li className="text-primary">
            <p className="grey"><i class="fas fa-comments  "></i> Learns</p>
              <h3>{user.learningLanguages}</h3>   
            </li>
          </ul>
         
        </div>
            </div>
            ) 
        })
      )}
      </div>
    )
  }
}


<<<<<<< HEAD
=======

/*   <h1 class="large text-primary">Developers</h1>
      <p class="lead">
        <i class="fab fa-connectdevelop"></i> Browse and connect with developers
      </p>
      <div class="profiles">
        <div class="profile bg-light">
          <img
            class="round-img"
            src="https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50?s=200"
            alt=""
          />
          <div>
            <h2>John Doe</h2>
            <p>Developer at Microsoft</p>
            <p>Seattle, WA</p>
            <a href="profile.html" class="btn btn-primary">View Profile</a>
          </div>
          <ul>
            <li class="text-primary">
              <i class="fas fa-check"></i> HTML
            </li>
            <li class="text-primary">
              <i class="fas fa-check"></i> CSS
            </li>
            <li class="text-primary">
              <i class="fas fa-check"></i> JavaScript
            </li>
            <li class="text-primary">
              <i class="fas fa-check"></i> Python
            </li>
            <li class="text-primary">
              <i class="fas fa-check"></i> C#
            </li>
          </ul>
        </div> */ 
>>>>>>> master
