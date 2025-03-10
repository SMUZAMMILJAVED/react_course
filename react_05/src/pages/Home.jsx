import React, { useEffect, useState } from 'react'
import HomeContent from '../components/homeContent'
import { Link } from 'react-router-dom'

const Home = () => {

    const [data,setData]=useState({});
    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/todos/1')
        .then(response => response.json())
        .then(json => setData(json))
    },[data])
   
  return (
    <>
    {/* <div>Home page</div>
    <HomeContent/>
    <Link to="/about"> go to about page</Link> */}
    <div>
    title : {data.title} <br />
    completed : {data.completed?.toString()}
    </div>
    </>
    
  )
}

export default Home