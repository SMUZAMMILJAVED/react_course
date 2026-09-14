import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import useCounter from './hooks/useCounter'

function App() {
  // const dataApi=async ()=>{
  //   const a= await fetch('https://fakestoreapi.com/products')
  //  const r=await a.json()
  //  console.log(r)
  // }
  // dataApi()


//   const test=()=>{
//     console.log("hello 1")
//  for(let i=0;i<10;i++){
//    console.log(i)
//  }
// setTimeout(()=>{
// console.log("from time out")
// },3000)
// console.log("hello 2")
//   }
//   test()
 
const {count,increase,decrease}=useCounter()
  return (
    <>
    <h1>counter is {count}</h1>
    <button onClick={increase}>+</button>
    <button onClick={decrease}>-</button>
    </>
  )
}

export default App
