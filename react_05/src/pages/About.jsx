import React from 'react'
import AboutContent from '../components/AboutContent'
import { Link } from 'react-router-dom'

const About = () => {
  return (
    <>
    <div>About</div>
    <AboutContent/>
    <Link to="/"> go to home page</Link>
    </>
    
  )
}

export default About