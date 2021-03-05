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
    console.log("route triggered to fget users")
    let response = await axios.get('http://localhost:5005/api/userinformation')
    console.log(response, "response at FE")
    let {data} = response;
    console.log(data, "userlsit at FE")
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
<h1>Bonjour {this.state.currentUser.name}</h1>

      {this.state.users.length === 0 ? (
        <div>Loading.....</div>
      ): (
        this.state.users.map((user, index) => {
          return <div key={index}>{user.name} </div>
        })
      )}


      {/* <table >
      <tr>
        <th  className="p">Name</th>
            </tr>
      <tbody >
        <p>hier database</p>
      </tbody>
      </table>         */}
      </div>
    )
  }
}
