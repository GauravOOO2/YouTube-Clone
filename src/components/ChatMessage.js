import React from 'react'

const ChatMessage = (props) => {
    const {name, Message} = props

  return (
    <div>
        <span >{name}</span>
        <span >{Message}</span>
       <p>Comment</p>
    </div>
  )
}

export default ChatMessage;