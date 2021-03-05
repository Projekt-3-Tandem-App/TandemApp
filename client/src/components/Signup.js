import React, { Component } from 'react'
import { signup } from '../services/auth';

export default class Signup extends Component {

  state = {
    username: '',
    password: '',
    message: ''
  }

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    })
  }


//   handleNumber = event => {
//     let value = event.target.value;
//     this.setState((state,props) => ({
//         age : value
//     }))
// }



  handleSubmit = event => {
    event.preventDefault();
    const { username, password } = this.state;
    signup(username, password)
      .then(user => {
        if (user.message) {
          this.setState({
            message: user.message,
            username: '',
            password: ''
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
        <h2>Signup</h2>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="username">Username: </label>
          <input
            type="text"
            name="username"
            value={this.state.username}
            onChange={this.handleChange}
            id="username"
          />
          <label htmlFor="password">Password: </label>
          <input
            type="password"
            name="password"
            value={this.state.password}
            onChange={this.handleChange}
            id="password"
          />
          <label htmlFor="name">User name: </label>
          <input
            type="name"
            name="name"
            value={this.state.name}
            onChange={this.handleChange}
            id="name"
          />
        {/* languages
        location */}

        <label htmlFor="age">Age: </label>
          <input
            type="Number"
            name="age"
            value={this.state.age}
            onChange={this.handleNumber}
            id="age"
          />



          
          <button type="submit">Sign Up</button>
          {this.state.message && (
            <h3>{this.state.message}</h3>
          )}
        </form>
      </div>
    )
  }
}