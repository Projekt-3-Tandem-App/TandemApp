import React, { Component } from 'react'
import { login } from '../services/auth';
import {Link} from 'react-router-dom';

export default class AboutPapagei extends Component {

  


  render() {
    return (
      <section  className="container-auth p-2" >
      <div>
         <h1 class="large text-primary">About Papagei</h1>
         <p class="lead"><i class="fas fa-user"></i> Learn any language by talking with real people </p>

         <p>Since we believe that the best way to learn, 
         progress and master a language is to exchange, 
         we want to help you find your perfect tandem partner on our Papagei 
         application </p>

         <p>On our application you can find our community 
         and filter users by your city and language choices.</p>

        <p>The application gives you the opportunity to contact each other 
        to chat on the application or to meet in real life</p>
        
      
        <p class="my-3">
        Don't have an account?
        <Link to="/signup" className=" text-dark"> Signup </Link>
      </p>
      </div>
      </section>
    )
  }
}