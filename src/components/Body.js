import React from 'react'
import Maincontainer from './Maincontainer'
import Sidebar from './Sidebar'
import { Outlet } from 'react-router-dom'
const Body = () => {
  return (
    <div className=' flex ' >
    <Sidebar />
    <Outlet />
    </div>
  )
}

export default Body