import React from 'react'
import {Link} from 'react-router-dom'

// import { Link } from 'react-router-dom'
// import { logout } from '../services/auth';







const Navbar = (props) => {
  return (
    <nav >
      <h1> Papagei </h1>
      <ul>
        <li><Link to="/">Home</Link></li>
       
        <li><Link to="#">Chat</Link></li>
        <li><Link to="/profile">Profile</Link></li>
      
        
        {/* <li>
              <Link to='/' onClick={() => handleLogout(props)} >Logout</Link>
        </li> */}
      </ul>
    </nav>
  )
}

export default Navbar
