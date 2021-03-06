import React, { Component } from 'react'
import axios from 'axios';



export default class UsersList extends Component {

  state = {
    currentUser: this.props.user,
    users: []
  }



  componentDidMount(){
    this.getUsers()
  }
  getUsers = async () => {
    //console.log("route triggered to fget users")
    let response = await axios.get('http://localhost:5005/api/userinformation')
    //console.log(response, "response at FE")
    let {data} = response;
    //console.log(data, "userlsit at FE")
    this.setState({users: data})
  }
 
  render() {
    console.log(this.props, "props at userslist")

 

  //  const users = this.state.users.map(user => {
  //    return(
  //      <div>
  //        <h2>{user.name}</h2>
  //        <p>{user.age}</p>
  //      </div>
  //    )
  //  })
    
    return (
      <div>
        <h3>Bonjour {this.state.currentUser.name}</h3>
        <p class="lead"> Find your Tandem Buddy</p>
        

      {this.state.users.length === 0 ? (
        <div>Loading.....</div>
      ):
      
       (
        this.state.users.map((user, index) => {
          return (
            <div key={index} >
            <div >
          <img
            class="round-img"
            src="https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50?s=200"
            alt=""
          />
          <div>
            <h2>{user.name}</h2>
            <p> Age:{user.age}</p>
            <p> Gender: {user.gender}</p>
            <p> Location: {user.location}</p>
            <p> Goal: {user.goal}</p>
            <a href="profile.html" class="btn btn-primary">View Profile</a>
          </div>

          <ul>
            <li class="text-primary">
              <i class="fas fa-check"></i>
              <p>{user.nativeLanguages}</p>
            </li>
            <li class="text-primary">
              <i class="fas fa-check"></i>
              <p>{user.learningLanguages}</p>
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