import React,{ useEffect, useState } from 'react'
import { useSelector,useDispatch } from 'react-redux'
import {toggleTheme} from '../Redux/Slice'
import './Nav.css'

 const Nav = () => {
    let dispatch=useDispatch()
//     let [theme,setTheme]=useState("")
let state=useSelector((s:any)=>s.data.mode)


useEffect(()=>{
    let localvalue=localStorage.getItem("value")
  if(localvalue==null){
    dispatch(toggleTheme("light"))
  }

    
},[])

  return (
    <div >
          <nav className={`h-24   flex fixed top-0 right-0 left-0 border-b-2 border-b-gray-100 z-40 ${state=="light"?"lightmode":state=="dark"?"darkmode":"colorful"}`}>
         <div className='flex-1 flex items-center'>
          <h3 className=' font-bold pl-3'>Theme App</h3>
         </div>
         <div className='flex-1 flex align-center justify-center  '>
             <select className='outline-0' 
             onChange={(e)=>dispatch(toggleTheme(e.target.value))
             }
                value={state}>
                <option value="light" style={{color:"black"}} >Light</option>
                <option value="dark"  style={{color:"black"}}>Dark</option>
                <option value="colorful"  style={{color:"black"}}>Colorful</option>
             </select>
         </div>
      </nav>
    </div>
  )
}
export default Nav