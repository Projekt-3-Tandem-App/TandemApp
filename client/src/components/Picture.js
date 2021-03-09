/*import React, { Fragment, useState, Component } from 'react';
import Message from './Message';
import Progress from './Progress';
import axios from 'axios';


import {Link} from 'react-router-dom'
import Navbar from './layout/Navbar'
import { signup } from '../services/auth';
import {logout} from '../services/auth'



const Picture = () => {
  const [file, setFile] = useState('');
  const [filename, setFilename] = useState('Choose File');
  const [imageUrl, setUploadedFile] = useState({});
  const [message, setMessage] = useState('');
  const [uploadPercentage, setUploadPercentage] = useState(0);

  const onChange = e => {
    setFile(e.target.files[0]);
    setFilename(e.target.files[0].name);
  };

  const onSubmit = async e => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('file', file);

    try {
      const res = await axios.post('/upload', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        },
        onUploadProgress: progressEvent => {
          setUploadPercentage(
            parseInt(
              Math.round((progressEvent.loaded * 100) / progressEvent.total)
            )
          );

          // Clear percentage
          setTimeout(() => setUploadPercentage(0), 10000);
        }
      });

      const { fileName, filePath } = res.data;

      setUploadedFile({ fileName, filePath });

      setMessage('File Uploaded');
    } catch (err) {
      if (err.response.status === 500) {
        setMessage('There was a problem with the server');
      } else {
        setMessage(err.response.data.msg);
      }
    }
  };

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

    <h2 class="large text-primary center ">Upload your Picture</h2>
    <Fragment>
      {message ? <Message msg={message} /> : null}
      <form onSubmit={onSubmit}>
        <div >
          <input
            type='file'
            id='customFile'
            onChange={onChange}
          />
          <label  htmlFor='customFile'>
            {filename}
          </label>
        </div>

        <Progress percentage={uploadPercentage} />

        <input
          type='submit'
          value='Upload'        
        />
      </form>
      { imageUrl ? (
        <div >
          <div >
            <h3 >{ imageUrl.fileName}</h3>
            <img style={{ width: '100%' }} src={ imageUrl.filePath} alt='' />
          </div>
        </div>
      ) : null}
    </Fragment>
 
  </div>
  </section>
    </div>


  </div>
    
  </div>
    
  );
};

export default Picture;

*/



import { Link } from "react-router-dom";
import Navbar from "./layout/Navbar";
import { signup } from "../services/auth";
import { logout } from "../services/auth";
// components/AddThing.js
import React, { Component } from "react";

// import the service file since we need it to send (and get) the data to(from) server
import service from "../api/service";

class Picture extends Component {
  state = {
    name: "",
    description: "",
    imageUrl: "",
  };

  handleLogout = () => {
    // event.preventDefault();
     logout().then(() => {
       this.props.setUser(null)
       this.props.history.push('/');
     }) 
   }
   
  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };



  // this method handles just the file upload
  handleFileUpload = (e) => {
    console.log("The file to be uploaded is: ", e.target.files[0]);

    const uploadData = new FormData();
    // imageUrl => this name has to be the same as in the model since we pass
    // req.body to .create() method when creating a new thing in '/api/things/create' POST route
    uploadData.append("imageUrl", e.target.files[0]);

    service
      .handleUpload(uploadData)
      .then((response) => {
        // console.log('response is: ', response);
        // after the console.log we can see that response carries 'secure_url' which we can use to update the state
        this.setState({ imageUrl: response.secure_url });
      })
      .catch((err) => {
        console.log("Error while uploading the file: ", err);
      });
  };

  // this method submits the form
  handleSubmit = (e) => {
    e.preventDefault();

    service
      .saveNewThing(this.state)
      .then((res) => {
        console.log("added: ", res);
        // here you would redirect to some other page
      })
      .catch((err) => {
        console.log("Error while adding the thing: ", err);
      });
  };

  render() {
    return (
      <div>
        <div>
          <Navbar />
          <div className="profile-grid my-5 container">
            <div className="profile-exp bg-white p-2 ">
              <h2>
                <i class="fas fa-user my-1"></i> Settings
              </h2>
              <ul className="flex-smart ">
                <li>
                  <Link to="/profile" className="btn my-1 btn-width">
                    Profile
                  </Link>
                </li>
                <li>
                  <Link to="/languages" className="btn my-1 btn-width">
                    Languages
                  </Link>
                </li>
                <li>
                  <Link to="/upload" className="btn my-1 btn-width ">
                    Picture{" "}
                  </Link>
                </li>
                <li>
                  {" "}
                  <li> <Link to="/" onClick={() => this.handleLogout()} className="btn my-1 btn-width">Logout </Link></li>
                </li>
              </ul>
            </div>

            <section className=" profile-edu bg-white p-3">
              <div className="form-group">
                <h2 class="large text-primary center ">Upload your Picture</h2>
                <form
                  className="form profile-top"
                  onSubmit={(e) => this.handleSubmit(e)}
                >
                  <label>Choose file</label>
                  <input type="file" onChange={e => this.handleFileUpload(e)} />
                  <button className="btn btn-primary m-2" type="submit">

                    <h3>Submit changes </h3>
                  </button>
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

