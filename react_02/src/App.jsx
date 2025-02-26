import './App.css'
import { useState } from 'react';
import AddItem from './components/additem/AddItem';
import List from './components/List'
function App() {
 

  const[item,setItem]=useState(["item1","item2","item3","item4"])
 const bool= true;
 const addHandler =(data)=>{
  setItem([...item,data]);
  console.log(data);
 }
  return (

 <div 
 className= {`my-class ${bool?"App":""}`}   //&& 
 style={{
 backgroundColor : bool&&"yellow"
 }}
 >
  <AddItem onAdd={addHandler}/>
  <List arr={item}/>
 </div>
  )
}

export default App
