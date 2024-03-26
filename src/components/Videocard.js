import React from 'react'
import { Link } from 'react-router-dom'

const Videocard = (props) => {
  const {thumbnailId,channelTitle,title,id} = props;


  return (
    <Link to={'/Watchpage/'+id} >

  <div className='w-64 h-64 mx-6 my-5 bg-white shadow-md rounded-lg overflow-hidden transition duration-300 transform hover:scale-105' >
    < img  className='h-40 w-full object-cover'
    src={thumbnailId}
    alt='Thumb nail'
    />
    <div>
    <h3 className='text-lg font-semibold text-gray-800 pl-2 ' >Channel: {channelTitle}</h3>
    <p className='text-gray-600 mt-1 pl-2.5 flex-wrap' > {title} </p>
    </div>
  </div>
  </Link>
  )
}

export default Videocard