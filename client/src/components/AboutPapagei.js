import React, { Component } from 'react'
import { login } from '../services/auth';
import {Link} from 'react-router-dom';

export default class AboutPapagei extends Component {

  


  render() {
    return (
      <section  className="container-auth p-2" >
      <div>
         <h1 class="large text-primary">About Papagei</h1>
         <p class="lead"><i class="fas fa-user"></i> Sign into Your Account</p>
        
      
        <p class="my-3">
        Don't have an account?
        <Link to="/signup" className=" text-dark"> Signup </Link>
      </p>
      </div>
      </section>
    )
  }
}