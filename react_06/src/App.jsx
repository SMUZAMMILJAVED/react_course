import { useEffect, useState } from 'react'
import './App.css'
import Post from './components/Post';

function App() {
  const [data, setData] = useState({});
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/todos/1')
      .then(response => response.json())
      .then(json => setData(json))
  }, []);
  return (
    // <div>
    //   title:{data.title} <br />
    //   completed:{data.completed?.toString()}
    // </div>
    <Post/>
  )
}

export default App
