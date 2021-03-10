import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import Navbar from '../layout/Navbar'
import axios from 'axios';

//import UsersList from './UsersList'

export default class MessagesContainer  extends Component{


  state= {
    messages : [], 
    users: [], 
  }

  componentDidMount() {
    this.getData()
  }

  getData = () => {
    const id = this.props.user._id
    // const recipientId = this.props.recipientId._id
    // console.log('RECIPIENT', recipientId)
    console.log('SENDER', id)
     axios.get(`/api/message/history`)
    .then(response => {
      console.log('RESPONSE FRONTEND', response.data)
    this.setState({messages :response.data})
    })
    .catch(err =>{
      console.log(err);
    })
  }




  // getData = () => {
  //   const id = this.props.user._id
  //   console.log('SENDER', id)
  //   axios.get(`/api/message/history`, {
  //     params: { 
  //       userID: id
  //     }
  //   })
  //   .then(response => {
  //     console.log('RESPONSE FRONTEND', response.data)
  //   this.setState({messages :response.data})
  //   })
  //   .catch(err =>{
  //     console.log(err);
  //   })
  // }
  


  render() {

    const userList

    
   
    const messagesSent = this.state.messages.map(message =>{
      if(message.sender === this.props.user._id ) {
        return (
          <div>
          <p>{message.content}</p>
        </div>
        )
      }
    })


    
    return (
      <div>
        <Navbar/>  
        <div className="profile-grid my-5 container">
          <div className="profile-exp bg-white p-2 ">
            <h2><i class="fas fa-user my-1"></i> Your messages</h2>
            <div> <p>List users you had a message with</p></div>


            <div> <p>conversation with one of the user</p>
                  <p>{messagesSent}</p>
            
            </div>
          </div>
        </div>
      </div>
      
   
    
      
      
    )
  }
}