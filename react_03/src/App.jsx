import React, { useContext } from 'react'
import "./App.css"
import Counter from './components/Counter'
import { CounterContext } from './context/Counter'
const App = () => {
  const counterState= useContext(CounterContext);
  console.log(counterState);
  
  return (
    <>
     <h1>Counter is {counterState.count}</h1>
     <Counter/>
     <Counter/>
     <Counter/>
     <Counter/>
    </>
   
  )
}

export default App