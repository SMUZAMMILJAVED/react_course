import './App.css'
import About from './pages/About'
import Home from './pages/Home'
import { Route, Router, Routes } from 'react-router-dom'
import NotFound from './pages/NotFound'
import User from './pages/User'

function App() {
  return (
 <>
 <div>navbar</div>
<Routes>
<Route path='/' element={<Home/>}></Route>
 <Route path='/about' element={<About/>}></Route>
 <Route path='/user/:id' element={<User/>}></Route>
 <Route path='*' element={<NotFound/>}></Route> 
</Routes>
<div>footer</div>
 </>
 
  )
}

export default App
