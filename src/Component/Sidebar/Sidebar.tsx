import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router'
 const Sidebar = () => {
        let state=useSelector((s:any)=>s.data.mode)
  return (
    <div className={`h-200 absolute left-0 w-35 top-24  border-r border-slate-50 `}>
        <div>
        <div className='flex h-100 items-center justify-center '>
            <ul className=' h-50 flex flex-col gap-5'>
                <li><Link to='/'>Home</Link></li>
                <li> <Link to='/about'>About</Link></li>
                <li> <Link to='/contact'>Contact</Link></li>
            </ul>
        </div>
        </div>
        
    </div>
  )
}

export default Sidebar