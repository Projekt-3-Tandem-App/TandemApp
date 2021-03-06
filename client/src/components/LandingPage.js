import React from 'react'
import { Link } from 'react-router-dom'
import { logout } from '../services/auth';
import HomePage from './HomePage';


const handleLogout = props => {
  logout().then(() => {
    props.setUser(null)
  }) 
}

export default function LandingPage(props) {
  console.log(props.user);
  return (
    <div>
      <ul>
        {/* If we have a logged in user -> show projects and logout otherwise show login and signup */}
        {props.user ? (
          <>
            <li>
              <Link to="/" onClick={() => handleLogout(props)}>
                Logout
              </Link>
            </li>
          </>
        ) : (
          <>
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
                <li>
                  <Link to="/signup" className="">
                    Signup
                  </Link>
                </li>
                <li>
                  <Link to="/login" className="">
                    Login
                  </Link>
                </li>

                {/* <li>
              <Link to='/' onClick={() => handleLogout(props)} >Logout</Link>
        </li> */}
              </ul>
            </nav>
         
          </>
        )}
      </ul>
    </div>
  );
}


/* DONT DELETE IT
   <section className="showcase">
              <div class="overlay"></div>
              <div class="text">
                <h2>Learn language </h2>
                <h3>together with Papagei</h3>
                <p>
                Simply get into conversation with native speakers 
                </p>
                <Link to="/signup" className="btn-dark">
                register for free
                  </Link>
                  
              
              </div>
             
            </section>
*/



