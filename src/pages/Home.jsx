import React from 'react'
import Navbar from '../components/Navbar'
import { Link } from 'react-router-dom'
import './Home.css'

function Home() {
  return (
    <>
        <img className="home-photo" src="https://www.innersloth.com/wp-content/uploads/2022/10/AUVR_Internal-1.png" />
        <h2>Welcome to Among Us Crew Builder! Switch Tabs to view your current crew, update crew members, and also add new crew members!</h2>
        <Link className="view-crew" to="/allCrew">View Current Crew</Link>
    </>
)
}

export default Home