import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import Navbar from './layout/Navbar'

//import UsersList from './UsersList'

export default class ShowProfile  extends Component{


  render() {
    return (

      <div>
      <Navbar/>  
      <section class="container">
      <Link to="/" className="btn btn-light">Back To Profiles</Link>
  

      <div class="profile-grid my-1">
 
        <div class="profile-top bg-primary p-2">
          <img
            class="round-img my-1"
            src="https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50?s=200"
            alt=""
          />
          <h1 class="large">John Doe</h1>
          <p class="lead">is currently in Hamburg</p>
          <a href="profiles.html" class="btn btn-light">Message </a>
        </div>

        <div class="profile-exp bg-white p-2">
          <h2 class="text-dark">John speaks </h2>
          <h3 > English{this.props.user.nativeLanguages}
          </h3> 
          <div>
          </div>
          <h2 class="text-dark">John learning </h2>
          <h3>Spanish {this.props.user.learningLanguages}</h3>  
        </div>
      

    
        <div class="profile-edu bg-white p-2">
      
          <div>
            <h3> About John</h3>
            <p> 18 Jahre </p>

            <p>
              <strong>Description: </strong>Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Dignissimos placeat, dolorum ullam
              ipsam, sapiente suscipit dicta eius velit amet aspernatur
              asperiores modi quidem expedita fugit.
            </p>
          </div>
        </div>


        
        <div class="profile-about bg-light p-2">
          <h2 class="text-primary"> Goals</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sed
            doloremque nesciunt, repellendus nostrum deleniti recusandae nobis
            neque modi perspiciatis similique?
          </p>
          <div class="line"></div>
          <div class=" icons my-4">
            <Link >
              <i class="fab fa-twitter fa-2x"></i>
            </Link>
            <Link >
              <i class="fab fa-facebook fa-2x"></i>
            </Link>
            <Link>
              <i class="fab fa-linkedin fa-2x"></i>
            </Link>
            <Link>
              <i class="fab fa-instagram fa-2x"></i>
            </Link>
          
          
          </div>
        </div>
      </div>
    </section>
      
      
      </div>

   
    
      
      
    )
  }
}