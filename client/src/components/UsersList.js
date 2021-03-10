import React, { Component } from 'react'
import axios from 'axios';
import {Link} from 'react-router-dom'

export default class UsersList extends Component {
  state = {
    currentUser: this.props.user,
    users: [],
    location: '',
    nativeLanguages: '',
    learningLanguages: '',
    imageUrl: '',
    showFilter: false,
    
  }


 

  componentDidMount(){
    this.getUsers()
  }
  getUsers = async () => {
    //console.log("route triggered to fget users")
    let response = await axios.get('/api/users')
    //console.log(response, "response at FE")
    let {data} = response;
    //console.log(data, "userlsit at FE")
    this.setState({users: data})
  }

  handleChange = event => {
    const name = event.target.name;
    const target = event.target; 
    const value = target.value;
    console.log(name , value)
    this.setState({
      [name]: value
    })
    }

    toggleFilterHandler = () => {
     this.setState( (state , props ) => ( {showFilter : !state.showFilter}))
     console.log('Hey from FilterHandler')
   }

  




  render() {

    let toggleFilter = null;
    if ( this.state.showPersons) {
      toggleFilter = ( 
          <form className="form profile-top" onSubmit={this.handleSubmit}>
      <select name="location" id="location" form="carform" onChange={this.handleChange}>
          <option value='' selected> Choose your tandem location</option>
          <option value="">Show all location</option>
          <option value="berlin">Berlin</option>
          <option value="hambourg">Hamburg</option>
          <option value="paris">Paris</option>
          <option value="london">London</option>
          </select>
          <label htmlFor="learningLanguages" className="m-1"></label>
          <select name="learningLanguages" id="learningLanguages" form="carform" onChange={this.handleChange} multiple>
          <option value="" selected> I want to learn </option>
          <option value="">All</option>
          <option value="english">English</option>
          <option value="french">French</option>
          <option value="german">German</option>
          <option value="italian">Italian</option>
          <option value="spanish">Spanish</option>
          </select>
          <select name="nativeLanguages" id="nativeLanguages" form="carform" onChange={this.handleChange}>
          <option value="" selected> I speak </option>
          <option value="">All</option>
          <option value="english">English</option>
          <option value="french">French</option>
          <option value="german">German</option>
          <option value="italian">Italian</option>
          <option value="spanish">Spanish</option>
          </select>
          {/* <button  className="btn btn-primary m-2" type="submit"> 
          <h3> Filter </h3></button> */}
      </form>
     )
   }
    console.log("IMG URL ", this.state.imageUrl)
    //console.log(this.props, "props at userslist")
    
    console.log("USER location", this.state.currentUser.location)
    const filteredUsers = this.state.users.filter(eachuser => {
      return (eachuser.location === this.state.location || !this.state.location)
      && (eachuser.nativeLanguages === this.state.learningLanguages ||!this.state.learningLanguages)
      || (eachuser.learningLanguages === this.state.nativeLanguages ||!this.state.nativeLanguages)
    })
    console.log(filteredUsers)
    return (
      <div> 
      <div className=" m-3" >
      <h1 className=" m-3">Language Learners</h1>

      <button 
      className="btn btn-primary"
      onClick={this.toggleFilterHandler}
    >
       <i className="fas fa-sliders-h  margin-y"></i>
      </button>
      {toggleFilter}
      </div>
{/*     
      {this.state.users.length === 0 ? (
        <div>Loading.....</div>
      ):
       ( */}
        {/* this.state.users.map((user, index) => { */}
        {filteredUsers.map((user, index) => {
          console.log('HERE USER', user)
          return (
            <div  className="profiles" key={index} >
            <div className= "profile bg-light" >
          <img className="img-profile"
           
            src={user.imageUrl}
            alt = ""
            /*src={`https://res.cloudinary.com/demo/image/upload/w_200,h_200,c_fill,r_max/${user.imageUrl}`} */
            /*https://res.cloudinary.com/demo/image/upload/w_100,h_100,c_thumb,g_faces/couple.jpg */
          />
          <div>
            <h2 className="my-1">{user.name}</h2>
            <h3> Age:{user.age}</h3>
            <h3> Gender: {user.gender}</h3>
            <h3> Location: {user.location}</h3>
            {/* <Link to="/showprofil"  className="btn  btn-dark my-2">View Profile</Link> */}
            <Link to={`/users/${user._id}`}  className="btn  btn-dark my-2">View Profile</Link>
          </div>
          <ul>
            <li className="text-primary">
              <p className="grey"> <i class="far fa-comments text-secondary "></i>Speaks</p>
              <h3>{user.nativeLanguages}</h3>
            </li>
            <li className="text-primary">
            <p className="grey"><i class="fas fa-comments  "></i> Learns</p>
              <h3>{user.learningLanguages}</h3>   
            </li>
          </ul>
        </div>
            </div>
            ) 
        })}
      {/* )} */}
      </div>
    )
  }
}