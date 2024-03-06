import React from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'


const Sidebar = () => {

  const menu = useSelector((store)=>store.app.isMenuOpen)
  console.log(menu);

  return !menu?null: ( 
    <div className=' inline-block w-36 shadow-lg p-4 ' >
      <ul className=' m-3 ' >
       <Link to='/' ><li>Home</li></Link>
        <li> Shorts </li>
        <li> Subscription </li>
      </ul>
    </div>
  )
}

export default Sidebar