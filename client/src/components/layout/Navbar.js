import React from 'react'
// import { Link } from 'react-router-dom'
// import { logout } from '../services/auth';

const Navbar = () => {
  return (
    <nav className="navbar" >
      <h1> Papagei | Parrot  </h1>
      <ul>
        <li><a href="#">Home</a></li>
        <li><a href="#">Chat</a></li>
        <li><a href="#">Profil</a></li>
        {/* <li>
              <Link to='/' onClick={() => handleLogout(props)} >Logout</Link>
            </li> */}
      </ul>
    </nav>
  )
}

export default Navbar
