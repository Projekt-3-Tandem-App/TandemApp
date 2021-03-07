import React from 'react'
import {Link} from 'react-router-dom'


// import { Link } from 'react-router-dom'
// import { logout } from '../services/auth';


/*  <nav class="navbar bg-dark">  */




const Navbar = (props) => {
  return (
    <nav className="navbar bg-dark ">
    <ul>
    <img
     className="round-img png margin-y"
     src="https://images.vexels.com/media/users/3/156819/isolated/lists/9ef07f640db3ffba01c183d3a0864f21-macaw-parrot-bird-illustration.png"
    alt=""
    />
     <h1>Papagei</h1>
    </ul>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="#"> Chat</Link></li>
        <li><Link to="/profile">Profil</Link></li>
        
        {/* <li>
              <Link to='/' onClick={() => handleLogout(props)} >Logout</Link>
        </li> */}
      </ul>
    </nav>
  )
}

export default Navbar
