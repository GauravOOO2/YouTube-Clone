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
         <input onChange={(e)=>setLiveMessage(e.target.value)} className='border border-black' type='text' />
         <button className='bg-gray-500 p-1 rounded-lg font-bold ' > Send </button>
         
        </form>
        <div className='border border-black p-[10rem]   ' >
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