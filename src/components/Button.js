import React from 'react'


const Button = (props) => {
  const {name,} = props
  return ( 
    <div className=' m-2 ' >
      <button className='ml-1 p-2 bg-red-500 text-white  rounded-lg' > {name} </button>
    </div>
  )
}

export default Button