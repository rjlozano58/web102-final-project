import React from 'react'
import { Link } from 'react-router-dom'
import '../App.css'

function Navbar() {
  return (
      <div className='nav-container'>
        <div className='links-container'>
          <p><Link to="/">Home</Link></p>
          <p><Link to="/allCrew">View All Crewmates</Link></p>
          <p><Link to="/new">Add a Crewmate</Link></p>
        </div>
      </div>
  )
}

export default Navbar