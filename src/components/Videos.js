import React, { useEffect } from 'react'
import { GOOGLE_API_KEY  ,YOUTUBE_VIDEOS_URL } from '../util/constants'
import { useDispatch, useSelector } from 'react-redux'
import {updateMostViewedList} from '../util/videoSlice'
import Videocard from './Videocard'

const Videos = () => {

  const dispatch = useDispatch();
  const MostViewedList = useSelector((appStore)=>appStore?.videos?.MostViewedList)
  console.log(MostViewedList);

  const fetchdata = async()=>{
    const data =  await fetch(YOUTUBE_VIDEOS_URL);
    const json = await data.json();
    console.log(json?.items);
    dispatch(updateMostViewedList(json?.items));
    
  }

  useEffect(()=>{
    fetchdata();
  },[])

  return (
    <div className='flex flex-wrap  '  >
      {
        MostViewedList?.map((data)=>(
          <Videocard 
          channelTitle={data?.snippet?.channelTitle}
          thumbnailId={data?.snippet?.thumbnails?.medium?.url}
          title={data?.snippet?.localized?.title}
          id={data?.id}
          
          />
        )
        )
      }
    </div>
  )
}

export default Videos