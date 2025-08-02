import { useState,createContext } from 'react'
import { HashRouter ,Routes,Route, Link } from 'react-router'
import './App.css'
import Home from './Component/Home/Home'
import Contact from './Component/Contact/Contact'
import About from './Component/About/About'
import Nav from './Component/Nav/Nav'

function App() {
  

  return (
    <div className='h-screen overflow-y-hidden'>
      <div className=''>
           <Nav/>
      </div>
        <div className=' h-screen pt-24 overflow-y-hidden '>
      <HashRouter>
      {/* <Link to="/">home</Link>
      <Link to="/about">about</Link>
      <Link to="/contact">contact</Link> */}
    
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/contact' element={<Contact/>}/>
      </Routes>
    </HashRouter>
</div>
 
      
    </div>
  )
}

export default App
