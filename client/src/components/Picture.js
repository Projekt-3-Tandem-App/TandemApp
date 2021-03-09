/*import React, { Component } from 'react';
 
// import the service file since we need it to send (and get) the data to(from) server
import service from '../api/service';
 
class Picture extends Component {
  state = {
    name: '',
    description: '',
    imageUrl: ''
  };
 
  handleChange = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };
 
  // this method handles just the file upload
  handleFileUpload = e => {
    console.log('The file to be uploaded is: ', e.target.files[0]);
 
    const uploadData = new FormData();
    // imageUrl => this name has to be the same as in the model since we pass
    // req.body to .create() method when creating a new thing in '/api/things/create' POST route
    uploadData.append('imageUrl', e.target.files[0]);
 
    service
      .handleUpload(uploadData)
      .then(response => {
        // console.log('response is: ', response);
        // after the console.log we can see that response carries 'secure_url' which we can use to update the state
        this.setState({ imageUrl: response.secure_url });
      })
      .catch(err => {
        console.log('Error while uploading the file: ', err);
      });
  };
 
  // this method submits the form
  handleSubmit = e => {
    e.preventDefault();
 
    service
      .saveNewThing(this.state)
      .then(res => {
        console.log('added: ', res);
        // here you would redirect to some other page
      })
      .catch(err => {
        console.log('Error while adding the thing: ', err);
      });
  };
 
  render() {
    return (
      <div>
        <h2>New Thing</h2>
        <form onSubmit={e => this.handleSubmit(e)}>
          <label>Name</label>
          <input type="text" name="name" value={this.state.name} onChange={e => this.handleChange(e)} />
          <label>Description</label>
          <textarea type="text" name="description" value={this.state.description} onChange={e => this.handleChange(e)} />
          <input type="file" onChange={e => this.handleFileUpload(e)} />
          <button type="submit">Save new thing</button>
        </form>
      </div>
    );
  }
}
 
export default Picture;
*/


import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import Navbar from './layout/Navbar'
import { signup } from '../services/auth';
import axios from 'axios';
import {logout} from '../services/auth'
 
// import the service file since we need it to send (and get) the data to(from) server
import service from '../api/service';
 
class Picture extends Component {
  state = {
    name: '',
    description: '',
    imageUrl: ''
  };
 
  handleChange = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };
 
  // this method handles just the file upload
  handleFileUpload = e => {
    console.log('The file to be uploaded is: ', e.target.files[0]);
 
    const uploadData = new FormData();
    // imageUrl => this name has to be the same as in the model since we pass
    // req.body to .create() method when creating a new thing in '/api/things/create' POST route
    uploadData.append('imageUrl', e.target.files[0]);
 
    service
      .handleUpload(uploadData)
      .then(response => {
        // console.log('response is: ', response);
        // after the console.log we can see that response carries 'secure_url' which we can use to update the state
        this.setState({ imageUrl: response.secure_url });
      })
      .catch(err => {
        console.log('Error while uploading the file: ', err);
      });
  };
 
  // this method submits the form
  handleSubmit = e => {
    e.preventDefault();
 
    service
      .saveNewThing(this.state)
      .then(res => {
        console.log('added: ', res);
        // here you would redirect to some other page
      })
      .catch(err => {
        console.log('Error while adding the thing: ', err);
      });
  };
 
  render() {
    return (
      <div>
        <div>
         <Navbar/>  
        <div className="profile-grid my-5 container">

        <div className="profile-exp bg-white p-2 ">

        <h2 ><i class="fas fa-user my-1"></i> Settings</h2>
        <ul className="flex-smart " >
        <li><Link to="/profile" className="btn my-1 btn-width">Profile</Link></li>
        <li><Link to="/languages" className="btn my-1 btn-width">Languages</Link></li>
        <li><Link to="/languages" className="btn my-1 btn-width ">Picture </Link></li>
        <li> <Link to="/picture" className="btn my-1 btn-width">Logout </Link></li>
        </ul> 
        </div>



        <section className=" profile-edu bg-white p-3">
      <div className="form-group" > 

        <h2 class="large text-primary center ">Edit your Languages</h2>
        <form onSubmit={e => this.handleSubmit(e)}>
          <label>Name</label>
          <input type="text" name="name" value={this.state.name} onChange={e => this.handleChange(e)} />
          <label>Description</label>
          <textarea type="text" name="description" value={this.state.description} onChange={e => this.handleChange(e)} />
          <input type="file" onChange={e => this.handleFileUpload(e)} />
          <button type="submit">Save new thing</button>
        </form>

     
      </div>
      </section>
        </div>


      </div>
        
      </div>
    );
  }
}

export default Picture;

/* <h2>New Thing</h2>
        <form onSubmit={e => this.handleSubmit(e)}>
          <label>Name</label>
          <input type="text" name="name" value={this.state.name} onChange={e => this.handleChange(e)} />
          <label>Description</label>
          <textarea type="text" name="description" value={this.state.description} onChange={e => this.handleChange(e)} />
          <input type="file" onChange={e => this.handleFileUpload(e)} />
          <button type="submit">Save new thing</button>
        </form> */


        /*
        <form className="form profile-top" onSubmit={this.handleSubmit}>   
        <h2 className="m-3"> Choose your native Language</h2>
          
          <select name="nativeLanguages" id="nativeLanguages" form="carform" onChange={this.handleChange}>
          <option selected>{this.state.nativeLanguages}</option>
          <option value="english">English</option>
          <option value="french">French</option>
          <option value="german">German</option>
          <option value="italian">Italian</option>
          <option value="spanish">Spanish</option>
          </select>
         
          <select name="learningLanguages" id="learningLanguages" form="carform" onChange={this.handleChange} multiple>
          <option selected>{this.state.learningLanguages}</option>
          <option value="english">English</option>
          <option value="french">French</option>
          <option value="german">German</option>
          <option value="italian">Italian</option>
          <option value="spanish">Spanish</option>
          </select>
         
          <button  className="btn btn-primary m-2" type="submit"> 
          <h3 >Submit changes </h3></button>
          {this.state.message && (
            <h3>{this.state.message}</h3>
          )}
        </form> */