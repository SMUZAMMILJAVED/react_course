import React, { useMemo, useState } from 'react'
const complexCal=()=>{
  console.log("working...")
  let a=0
  for(let i=0;i<1000;i++){
a+=i;
  }
  return a;
}
const App = () => {
  const [count,setCount]=useState(0)
  
  // const result=complexCal()
  const result =useMemo(()=>{
   return  complexCal()
  },[])

 const sayHello=()=>{
console.log("hello")
  }
  const f=useMemo(()=>{
    return sayHello()},[])

    
  return (
    <div>
      <h1>Counter is {count}</h1>
      <button onClick={()=>{setCount(count+1)}}>click to update</button>
    </div>
  )
}

export default App
