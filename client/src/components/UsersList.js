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

      <div className="flexbox m-3" >
      <h1 className="  m-3">Language Learners</h1>

      <a href="profile.html" className="btn btn-primary"> <i className="fas fa-sliders-h  margin-y"></i> </a>
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
            <a href="profile.html" className="btn  btn-dark my-2">View Profile</a> 
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