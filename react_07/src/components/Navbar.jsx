import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { multiply } from '../redux/counter/counterSlice'
const Navbar = () => {
     const count = useSelector((state) => state.counter.value);
     const dispatch = useDispatch()
  return (
    <div>
      i am navbar counter is {count}
      <button onClick={()=>{dispatch(multiply())}}>multiply by 2</button>

    </div>
  )
}

export default Navbar
