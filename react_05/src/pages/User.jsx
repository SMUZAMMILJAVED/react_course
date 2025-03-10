import React from 'react'
import { Link, useParams } from 'react-router-dom'

const User = () => {
  const param=  useParams();
  console.log(param);
  
  return (
    <>
    <div>Username :{param.id}</div>
    <Link to={'/'}>go to home</Link>
    </>
    
  )
}

export default User