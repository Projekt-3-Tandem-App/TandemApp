import React from 'react'

const Navbar = () => {
  return (
    <nav className="navbar bg-dark">
      <h1>
        <a href="#"><i className="fas fa-code"></i> Papagei | Parrot</a>
      </h1>
      <ul>
        <li><a href="#">Home</a></li>
        <li><a href="#">Chat</a></li>
        <li><a href="#">Profil</a></li>
      </ul>
    </nav>
  )
}

export default Navbar
