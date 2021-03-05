import React from 'react'
import { Link } from 'react-router-dom'
import { logout } from '../services/auth';

const handleLogout = props => {
  logout().then(() => {
    props.setUser(null)
  })
}

export default function LandingPage(props) {
  console.log(props.user)
  return (
    <div>

    
    <ul>
      
      {/* If we have a logged in user -> show projects and logout otherwise show login and signup */}
      {props.user ? (
        <>
          {/* <li>
            <Link to='/projects'>Projects</Link>
          </li> */}
         
          <li>
            <Link to='/' onClick={() => handleLogout(props)} >Logout</Link>
          </li>
        </>
      ) : (
          <>
          <h1>PAPAGEI APP</h1>
            <li>
              <Link to='/signup'>Signup</Link>
            </li>
            <li>
              <Link to='/login'>Login</Link>
            </li>
          </>
        )}
    </ul>
  </div>
  )
}