import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment, incrementByAmount } from './redux/counter/counterSlice'
function App() {
  const count = useSelector((state) => state.counter.value)
  const dispatch = useDispatch()

  return (
    <>
    <Navbar/>
    <div>
      {count}
    </div>
    <div>
      <button onClick={()=>{dispatch(increment()) }}>inc</button><button onClick={()=>{dispatch(decrement()) }}>dec</button>
      <button onClick={()=>{dispatch(incrementByAmount(10)) }}>inc</button>
    </div>
    </>
  )
}

export default App
