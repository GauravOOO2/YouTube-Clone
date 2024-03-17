import React, { useEffect, useState } from 'react'
import ChatMessage from './ChatMessage'
import { useDispatch, useSelector } from 'react-redux'
import { addmessages } from '../util/chatSlice'



const Livechat = () => {

  const chatMessage = useSelector((store)=>store.chat.messages)
  console.log(chatMessage);
  const dispatch = useDispatch()
  const [liveMessage, setLiveMessage] = useState('')

  useEffect(()=>{
    const i = setInterval(()=>{
      // console.log("api poll");
      dispatch(addmessages({
        name:"Rashmi",
        message:"she looks like a thumb"
      }))
    },2000);
    return ()=> clearInterval(i)
  },[])

  return (
    <div>
        <form onSubmit={(e)=>{e.preventDefault()
        dispatch(addmessages({
          name: 'Gaurav',
          message: liveMessage
        }))
        }}  >
        <div className='flex flex-wrapper p-4' > 
        < input  placeholder='Send your comment'  
        className=' border border-black rounded-lg w-80 pl-3 ' />
        <button className='ml-1 p-2 bg-red-500 text-white  rounded-lg ' >
          Send
        </button>
        {/* <img className=' h-9 pt-1  ' 
        src='https://icon-library.com/images/google-voice-icon/google-voice-icon-21.jpg' 
        alt='Recorder' /> */}
        
        </div>
         
        </form>
        <div className='  ' >
          {
            chatMessage.map((data,i)=>{
              <ChatMessage  key={i} name={data.name} Message={data.message} />
            })
          }
           
        </div>
    </div>
  )
}

export default Livechat