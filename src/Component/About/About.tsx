import React from 'react'
import './About.css'
import Sidebar from '../Sidebar/Sidebar'
import { useSelector } from 'react-redux'
 const About = () => {
    let state=useSelector((s:any)=>s.data.mode)
    
  return (
    <div className={`p-3  h-screen overflow-y-hidden ${state=="light"?"lightmode":state=="dark"?"darkmode":"colorful"} bg-scroll`}>
      
        {state=="dark"&& <div className=''><Sidebar/></div>}
     
     
     <div className={`relative ${state=="dark"?"left-35 right-0":"left-0 "}`}>
  about
  {state=="colorful"?
  <div className=" p-6 bg-gradient-to-r from-pink-100 via-yellow-100 to-indigo-100">
  <h1 className="text-3xl mb-4">Colorful Theme</h1>
   <p className="mb-4 text-lg text-purple-700">
    This is a vibrant and playful theme designed to showcase colorful layouts and creative fonts.
  </p>

  
  <button className="bg-purple-500 text-white px-4 py-2 rounded hover:bg-purple-600 transition">
    Explore More
  </button>
  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
    <div className="bg-white p-4 rounded-lg shadow-md">Card 1</div>
    <div className="bg-white p-4 rounded-lg shadow-md">Card 2</div>
    <div className="bg-white p-4 rounded-lg shadow-md">Card 3</div>
  </div>
</div>
:""}
     </div>
        </div>
  )
}
export default About