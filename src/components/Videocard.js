import React from 'react'
import { Link } from 'react-router-dom'

const Videocard = (props) => {
  const {name,thumbnailId,channelTitle,title,id} = props


  return (
    <Link to={'/Watchpage/'+id} >

  <div  >
    < img 
    src={thumbnailId}
    alt='Thumb nail'
    />
    <div>
    Channel name: {channelTitle}

    title: {title}
    </div>
  </div>
  </Link>
  )
}

export default Videocard