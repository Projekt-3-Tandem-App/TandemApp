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
      [name]: value,
      recipientIdforConversation : value 
    })
  }


 

  render() {

    console.log("TEST TO GET MESSAGES", this.state.recipientIdforConversation)

    // const userList

    //show the list of the users we want to see
    // get list of all the messages / recipient object
    // filter the duplicate (pour pas avoir 2 fois le same utilisateur)
    // array user on the left side

     //itetate over message array 
    // for each message compare recipient id 
    // if recipient id new push id in new array 
    //in the for lot take 
    
   //create of a map inside all Id 


//    <div>
//    {people.filter(person => person.age < 60).map(filteredPerson => (
//      <li>
//        {filteredPerson.name}
//      </li>
//    ))}
//  </div>


  //  let tableData;
  //           let filtered = this.props.products.filter(product => product.name.toLowerCase(). includes(this.props.query.toLowerCase()))
  //           tableData = filtered.map((product, index) => {
  //               return <ProductRow key={index} product={product} />
  //           })
  //       

    // const filteredDuplicates = this.state.messages.filter(message => message.recipient._id === message.recipient._id)
    // console.log("Filtered Duplicates",filteredDuplicates);

    // let filteredDuplicates = [...new Set([...this.state.messages.map(message => this.state.messages[message._id])])]
    //   console.log("Filtered Duplicates",filteredDuplicates);


    //  const filteredDuplicates = this.state.messages.recipient._id.filter(message => message.recipient._id === message.recipient._id)
    //  console.log("Filtered Duplicates",filteredDuplicates);

    //  const removeDuplicates = this.state.messages.filter((message, index) =>{
    //    return this.state.messages.indexOf(message) === index; 
    //  })
    //  const uniqueName = this.state.messages.filter(message => message.recipient._id !== this.state.messages.recipient._id)
    //  console.log("UNIQUE NAME", uniqueName)
    

     const displayMessages = this.state.messages.map(message =>{
      // console.log("Recipient id here", message.recipient._id)
      // let uniqueName = []
      // for (let i=0; i < message.lenght; i++){
      //   if (message.recipient._id[i] !== message.recipient._id){
      //     uniqueName.push(message)
            
      //   }
      // }
      return (
         <div key={message._id}>
            <p>{message.recipient.name}</p>
            <button value={message.recipient._id} onClick={this.handleClick}>see messages</button>
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
                  <p>{displayMessages}</p>

                  
            
            </div>
            <div className=" profile-edu bg-white p-3">
              <p> display messaye here </p>
              <p>{this.state.recipientIdforConversation}</p>
            </div>
          </div>
        </div>
      </div>
      
   
    
      
      
    )
  }
}