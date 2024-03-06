import React from 'react'
import ChatMessage from './ChatMessage'


const Livechat = () => {
  return (
    <div>
        <form >
         <input className='border border-black' type='text' />
         <button className='bg-gray-500 p-1 rounded-lg font-bold ' > Send </button>
        </form>
        <div>
            <ChatMessage />
        </div>
    </div>
  )
}

export default Livechat