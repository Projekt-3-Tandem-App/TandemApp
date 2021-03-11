import React, { Component } from "react";
import { Link } from "react-router-dom";
import Navbar from "../layout/Navbar";
import axios from "axios";

//import UsersList from './UsersList'

export default class MessageForm extends Component {
  state = {
    //sender: this.props.user,
    recipient: null,
    content: "",
  };

  handleChange = (event) => {
    console.log("Event target", event.target);
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  };

  componentDidMount() {
    this.getUserDetails();
  }

  getUserDetails = () => {
    const { id } = this.props.match.params;
    console.log("USER RECEPIENT", id);
    axios
      .get(`/api/users/${this.props.match.params.id}`)

      .then((response) => {
        console.log("ICI reponse", response);
        this.setState({
          recipient: response.data,
        });
      })
      .catch((err) => {
        console.log(err.response);
        if (err.response.status === 404) {
          // we have a 404 error
          this.setState({
            error: "Not found 🤷‍♀️🤷‍♂️",
          });
        }
      });
  };

  //axios post
  //recipient
  //message
  //this.state

  handleSubmit = (event) => {
    event.preventDefault();
    axios
      .post(`/api/message`, {
        recipient: this.state.recipient._id,
        content: this.state.content,
      })
      .then(() => {
        // this.setState(response.data)
        this.props.history.push("/messages");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  render() {
    console.log("CURRENT USER", this.props.user);
    console.log("RECEPIENT", this.state.recipient);

    if (this.state.recipient) {
      return (
        <div>
          <Navbar />

          <section class=" profile-grid my-5 container">
            <div className=" profile-button ">
              {" "}
              <Link to="/" className=" btn btn-light button ">
                Back To Profiles
              </Link>
            </div>

            <div className="profile-grid ">
              <div className="profile-exp bg-dark p-2 ">
              
                  <img
                    className="img-profile m-3 center"
                    src={this.state.recipient.imageUrl}
                    alt=""
                  />
               
              </div>

              {/* <Link to="/showprofil"  className="btn  btn-dark my-2">View Profile</Link> */}

              <section className=" profile-edu bg-white p-2">
                <div className="form-group">
                  <h2 class="large text-primary center my-3-profile p-3 ">
                    Write {this.state.recipient.name} a message
                  </h2>

                  <form
                    className="form profile-top-profile"
                    onSubmit={this.handleSubmit}
                    /* onSubmit={(e) => this.handleSubmit(e)}*/
                  >
                    <textarea
                      className="form-group"
                      type="text"
                      rows="4"
                      name="content"
                      value={this.state.content}
                      onChange={this.handleChange}
                      id="content"
                      placeholder="Write you message here"
                    />

                    <button className="btn btn-primary m-2" type="submit">
                      <h3>Submit changes </h3>
                    </button>
                    {this.state.message && <h3>{this.state.message}</h3>}
                  </form>
                </div>
              </section>
            </div>
          </section>
        </div>
      );
    } else {
      return <p>loading</p>;
    }
  }
}

/*                 <p>From {this.props.user.name} to {this.state.recipient.name}</p>*/

/*       <div className="profile-grid my-5 container">
            <div className="profile-exp bg-white p-2 ">
              <h2><i class="fas fa-user my-1"></i> Message form </h2>
  
              <form className="form profile-top" onSubmit={this.handleSubmit}>   
  
  
            <label htmlFor="name" className="m"> Sent to this user</label>
            <input
              type="text"
              name="recipient"
              value={this.state.recipient.name}
              //onChange={this.handleChange}
              id="recipient"
            />
            
                  <p>{this.props.user.name}</p>   
                 <label htmlFor="name" className="m">From current user</label>    
                 <input
                    className="form-group" 
                   type="text"
                   name="sender"
                   value= {this.props.user.name}
                   //onChange={this.handleChange}
                   id="sender"
                 
                 />
               
                 <input
                   className="form-group" 
                   type="text"
                   name="content"
                   value={this.state.content}
                   onChange={this.handleChange}
                   id="content"
                   placeholder="Write you message here"
                 />  
                
              
        
        
         <button  className="btn btn-primary m-2" type="submit"> 
         <h3 >Submit changes </h3></button>
         {this.state.message && (
           <h3>{this.state.message}</h3>
           )}
       </form>
               
                 
                 </div>
               </div>  

               */
