import React from 'react'


const Button = (props) => {
  const {name,} = props
  return ( 
    <div className=' m-2 ' >
      <button className='bg-gray-500 p-1 rounded-lg font-bold ' > {name} </button>
    </div>
  )
}

export default Button