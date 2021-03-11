import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import Navbar from '../layout/Navbar'
import axios from 'axios';

//import UsersList from './UsersList'

export default class MessagesContainer  extends Component{


  state= {
    messages : [], 
    // users: [], 
    recipientIdforConversation: null 
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

  


  handleClick = event => {
    console.log("ICI", event.target)
    const { name, value } = event.target;
    this.setState({
      // [name]: value,
      recipientIdforConversation : value 
    })
  }

  renderingMessages(id) {
    const filteredMessages = this.state.messages.filter(message => message.recipient._id === id || message.sender._id === id);
  }


 

  render() {
    console.log(this.state.messages);

    console.log("TEST TO GET MESSAGES", this.state.recipientIdforConversation)

  

    const id = this.props.user._id //loggedin user id
    const unique = []
    // messages will be replaced with this.state.messages
    const usernames = [...this.state.messages.map(message => message.recipient),
    ...this.state.messages.map(message => message.sender)]
    console.log(usernames)
    // id will be replaces with this.props.user._id - 
    usernames.forEach(user => {
      if (user._id !== id && unique.filter(x => x._id === user._id).length === 0) {
      unique.push(user)
      }
    })
    console.log("Unique", unique)
  // clicked name is alice: show all messages where bob is sender
  // or recipient
  // this clickedId is in the state
    const clickedId = this.state.recipientIdforConversation
    const filtered = this.state.messages.filter(m => m.recipient._id === clickedId || m.sender._id === clickedId)
    console.log("Filtered", filtered)



     const UsersList = unique.map(message =>{
      return (
         <div key={message._id}>
            <p>{message.name}</p>
            <button value={message._id} onClick={this.handleClick}>see messages</button>
        </div>
       )
     })

     const displayMessages = filtered.map(message => {
       return (
         <div>
           <p><b>from {message.sender.name} to {message.recipient.name}</b></p>
           <p>{message.content}</p>
           

         </div>
       )
     })


    
    return (
      <div>
        <Navbar/>  
        <div className="profile-grid my-5 container">
          <div className="profile-exp bg-white p-2 ">
            <h2><i class="fas fa-user my-1"></i> Your messages</h2>
            <div> <p>List users you had a message with</p></div>


            <div> <p>conversation with one of the user</p>
                  <p>{UsersList}</p>

                  
            
            </div>
            <div className=" profile-edu bg-white p-3">
              <p> display messaye here </p>
              <p>{displayMessages}</p>
              
            </div>
          </div>
        </div>
      </div>
      
   
    
      
      
    )
  }
}