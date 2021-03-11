import React, { Component } from "react";
import { login } from "../services/auth";
import { Link } from "react-router-dom";

export default class AboutPapagei extends Component {
  render() {
    return (
      <section>
        <section class="showcase ">
          <div class="text m-2">
            <h1 class="large text-primary  ">Simply get into </h1>
            <h1  class="large text-primary "> conversation with native speakers </h1>
          </div>

          <div class=" m-2">
            <p>
              Since we believe that the best way to learn, progress and master a
              language is to exchange, we want to help you find your perfect
              tandem partner on our Papagei application.
            </p>

            <p >
              On our application you can find our community and filter users by
              your city and language choices.
            </p>

            <p>
              The application gives you the opportunity to contact each other to
              chat on the application or to meet in real life.
              This project was realized by Vero and Oriane in 1 week during the Ironhack bootcamp.
            </p>

   
          </div>

         


          <Link to="/signup" className=" btn btn-dark m-2">
            register for free
          </Link>
        </section>
        <div class="icons my-1">
           
           
          </div>
      </section>
    );
  }
}

/*  <section  className="container-auth p-2" >
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
      </section> */

/* 
      <p class="lead"><i class="fas fa-user"></i> Learn any language by talking with real people </p>
          <div>
            <p>Since we believe that the best way to learn, 
              progress and master a language is to exchange, 
              we want to help you find your perfect Tandem partner on our Papagei 
              application </p>
          </div>
          <div>
          <p>On our application you can find our Tandem community 
         and filter users by your city and language choices.</p>
          </div>
         <div>
         <p>The application gives you the opportunity to contact your future Tandem,  
        chat on the application or meet in real life</p>
         </div>
        <div>
          <p>This project was realized by Vero and Oriane in 1 week during the Ironhack bootcamp </p>
        </div>


      */
