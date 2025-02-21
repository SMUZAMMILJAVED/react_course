import './App.css'
import List from './components/List'
function App() {
 const bool= true;
  return (

 <div 
 className= {`my-class ${bool?"App":""}`}   //&& 
 style={{
 "background-color" : bool&&"yellow"
 }}
 
 >
  <List/>
 </div>
  )
}

export default App
