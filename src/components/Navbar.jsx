import React from 'react'
import { Link } from 'react-router-dom'
import '../App.css'

function Navbar() {
  return (
      <div className='nav-container'>
        <h1 style={{fontFamily:`helvetica`, fontSize:`33px`, fontWeight:`300`}}>COMIC TALK</h1>
        <div className='links-container'>
          <p><Link to="/">Home</Link></p>
          <p><Link to="/new">Create a Post</Link></p>
        </div>
      </div>
  )
}

export default Navbar