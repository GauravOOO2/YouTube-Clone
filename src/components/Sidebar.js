import React from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'


const Sidebar = () => {

  const menu = useSelector((store)=>store.app.isMenuOpen)
  console.log(menu);

  return !menu?null: ( 
    <div className='inline-block w-64 bg-white shadow-lg p-4 h-full rounded-r-xl' >
      <ul className=' m-3 ' >
       <Link to='/' className='flex items-center text-gray-800 hover:text-red-500 py-2 px-4 rounded-md' ><li>Home</li></Link>
        <li className='flex items-center text-gray-800 hover:text-red-500 py-2 px-4 rounded-md' > Shorts </li>
        <li className='flex items-center text-gray-800 hover:text-red-500 py-2 px-4 rounded-md' > Subscription </li>
      </ul>
    </div>
  )
}

export default Sidebar