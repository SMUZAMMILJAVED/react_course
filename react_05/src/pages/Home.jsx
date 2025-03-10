import React from 'react'
import HomeContent from '../components/homeContent'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <>
    <div>Home page</div>
    <HomeContent/>
    <Link to="/about"> go to about page</Link>
    </>
    
  )
}

export default Home